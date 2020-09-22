import faunadb from 'faunadb';
import { getStats } from './index';

const env = process.env.APP_ENV;
const client = new faunadb.Client({
  secret: process.env.APORTEDEMAIN_FAUNADB_KEY,
});

export async function udpateStats({ commitments }) {
  const stats = await getStats();

  if (!stats.commitments) {
    stats.commitments = 0;
  }
  if (!stats.committers) {
    stats.committers = 0;
  }
  if (!stats.cards) {
    stats.cards = {};
  }

  // Add committer to global counter
  stats.committers += 1;

  Object.keys(commitments).forEach((cardUid) => {
    if (!stats.cards[cardUid]) {
      stats.cards[cardUid] = {
        committers: 0,
        commitments: 0,
      };
    }
    const cardCommitmentCount = commitments[cardUid].length;
    // Add committer to card counter
    stats.cards[cardUid].committers += 1;
    // Add commitments to card counter
    stats.cards[cardUid].commitments += cardCommitmentCount;

    // Add commitments to global counter
    stats.commitments += cardCommitmentCount;
  });

  // Update in faunadb
  const q = faunadb.query;
  await client.query(
    q.Replace(q.Select(['ref'], q.Get(q.Match(q.Index('stats_by_env'), env))), {
      data: { stats, env },
    })
  );
}

export default async (req, res) => {
  res.status(403).send('Forbidden');
};
