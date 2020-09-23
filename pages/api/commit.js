import { addContact, subscribeContactToList } from '../../lib/mailjet';
import { createCommitment } from './commitments/create';
import { udpateStats } from './stats/update';

async function registerToMailjet({ email, firstname, lastname, newsletter }) {
  await addContact({ email, firstname, lastname });
  if (newsletter) {
    await subscribeContactToList({
      email,
      listId: process.env.MAILJET_LIST_ID,
    });
  }
}

export default async ({ body }, res) => {
  // TODO: validate data
  try {
    await Promise.all([
      // Save commitments to the database
      createCommitment({ data: body }),
      // Update the stats
      udpateStats({ commitments: body.commitments }),
      // Save contact to mailjet
      registerToMailjet(body),
    ]);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: 'UNKNOWN' });
  }
};
