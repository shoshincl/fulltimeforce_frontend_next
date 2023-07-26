import { Suspense } from "react";
import Repositories from "./components/Repositories";
import Loading from "./components/loading";

const getRepositories = () =>
  fetch(`${process.env.API_BASE_URL}/repositories`).then((res) => res.json());

export default async function Home() {
  const repos = await getRepositories();
  const fulltimeforceRepos = [670874804, 671162097];
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="my-8">
        <p className="text-2xl font-bold">Repositories</p>
      </div>
      <Suspense fallback={<Loading />}>
        <Repositories
          repositories={repos.filter((repo: any) =>
            fulltimeforceRepos.includes(repo.id)
          )}
        />
      </Suspense>
    </main>
  );
}
