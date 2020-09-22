import { createCommitment } from './commitments/create';
import { udpateStats } from './stats/update';

export default async ({ body }, res) => {
  // TODO: validate data
  try {
    await createCommitment({ data: body });
    await udpateStats({ commitments: body.commitments });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: 'UNKNOWN' });
  }
};
