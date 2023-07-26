import moment from "moment";

const getCommits = (name: string) =>
  fetch(`${process.env.API_BASE_URL}/repository/${name}`).then((res) =>
    res.json()
  );

export default async function Repository({ params }: any) {
  const { name } = params;
  const commits = await getCommits(name);
  return (
    <main className="grid grid-cols-1 gap-4 min-h-screen flex-col items-center p-24">
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-lg font-bold">Commit History:</p>
      {commits.map(({ sha, commit, author }: any) => (
        <div key={sha} className="bg-white hover:shadow-md p-4 rounded-md">
          <p className="text-gray-500">{sha}</p>
          <div className="flex">
            <p className="text-md text-gray-500">Message:</p>
            <p className="text-md font-semibold">{commit.message}</p>
          </div>
          <div className="flex">
            <p className="text-sm text-gray-500">Author:</p>
            <p className="text-sm font-semibold">{author.login}</p>
          </div>
          <div className="flex">
            <p className="text-sm text-gray-500">
              {moment(commit.author.date).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
