import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@hubspot/api-client';

/**
 * Contact form → HubSpot lead capture via the CRM SDK (Deals API).
 *
 * On submit we:
 *   1. Upsert a Contact by email (firstname + message).
 *   2. Create a Deal in the configured pipeline/stage.
 *   3. Associate the Deal to the Contact.
 *
 * Required env (set in .env.local / your host's env):
 *   HUBSPOT_ACCESS_TOKEN   — a HubSpot Private App token with scopes:
 *                            crm.objects.contacts.read/write, crm.objects.deals.read/write
 * Optional:
 *   HUBSPOT_DEAL_PIPELINE  — pipeline id   (default: "default")
 *   HUBSPOT_DEAL_STAGE     — deal stage id (default: "appointmentscheduled")
 */

const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const DEAL_PIPELINE = process.env.HUBSPOT_DEAL_PIPELINE || 'default';
const DEAL_STAGE = process.env.HUBSPOT_DEAL_STAGE || 'appointmentscheduled';

// HUBSPOT_DEFINED association type id for Deal → Contact.
const DEAL_TO_CONTACT_ASSOC = 3;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Lead {
  email: string;
  name: string;
  message: string;
}

/** Find a contact by email and update it, or create a new one. Returns the contact id. */
async function upsertContact(client: Client, { email, name, message }: Lead): Promise<string> {
  const search = await client.crm.contacts.searchApi.doSearch({
    filterGroups: [
      { filters: [{ propertyName: 'email', operator: 'EQ', value: email } as never] },
    ],
    properties: ['email'],
    sorts: [],
    limit: 1,
    after: 0,
  } as never);

  if (search.results.length > 0) {
    const id = search.results[0].id;
    await client.crm.contacts.basicApi.update(id, {
      properties: { firstname: name, message },
    });
    return id;
  }

  const created = await client.crm.contacts.basicApi.create({
    properties: { email, firstname: name, message },
    associations: [],
  });
  return created.id;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = (req.body ?? {}) as Partial<Lead>;

  if (!name?.trim() || !message?.trim() || !email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a name, a valid email and a message.' });
  }

  if (!ACCESS_TOKEN) {
    // eslint-disable-next-line no-console
    console.error('HUBSPOT_ACCESS_TOKEN missing — set it in .env.local');
    return res.status(500).json({ error: 'Lead capture is not configured yet.' });
  }

  const lead: Lead = { email: email.trim(), name: name.trim(), message: message.trim() };
  const client = new Client({ accessToken: ACCESS_TOKEN });

  try {
    const contactId = await upsertContact(client, lead);

    const deal = await client.crm.deals.basicApi.create({
      properties: {
        dealname: `Website enquiry — ${lead.name}`,
        pipeline: DEAL_PIPELINE,
        dealstage: DEAL_STAGE,
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: DEAL_TO_CONTACT_ASSOC,
            },
          ],
        },
      ] as never,
    });

    return res.status(200).json({ ok: true, contactId, dealId: deal.id });
  } catch (err) {
    const e = err as { code?: number; body?: { message?: string }; message?: string };
    // eslint-disable-next-line no-console
    console.error('HubSpot CRM error', e.code, e.body?.message || e.message);
    return res.status(502).json({ error: 'Could not submit your message. Please try again.' });
  }
}
