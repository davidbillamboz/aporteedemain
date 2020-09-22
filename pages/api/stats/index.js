import faunadb from 'faunadb';

const env = process.env.APP_ENV;
const client = new faunadb.Client({
  secret: process.env.APORTEDEMAIN_FAUNADB_KEY,
});

export async function getStats() {
  const q = faunadb.query;
  const ret = await client.query(q.Get(q.Match(q.Index('stats_by_env'), env)));
  return ret ? ret.data.stats : {};
}

export default async (req, res) => {
  // TODO: secure
  const stats = await getStats();
  res.json(stats);
};
