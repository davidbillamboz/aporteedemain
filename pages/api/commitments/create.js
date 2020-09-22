import faunadb from 'faunadb';

const env = process.env.APP_ENV;
const client = new faunadb.Client({
  secret: process.env.APORTEDEMAIN_FAUNADB_KEY,
});

export async function createCommitment({ data }) {
  const q = faunadb.query;
  await client.query(
    q.Create(q.Collection('commitments'), { data: { ...data, env } })
  );
}

export default async (req, res) => {
  res.status(403).send('Forbidden');
};
