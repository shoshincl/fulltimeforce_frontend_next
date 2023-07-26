import moment from "moment";

import Link from "next/link";

function Repositories({ repositories }: any) {
  return (
    <div className="grid grid-cols-1 gap-2 w-[100%] md:max-w-[800px]">
      {repositories.map(({ name, topics, pushed_at }: any) => (
        <Link href={`/commits/${name}`}>
          <div className="bg-white hover:cursor-pointer hover:shadow-md p-4 rounded-md">
            <div className="flex flex-col">
              <p className="text-gray-500">Name:</p>
              <p className="text-md font-semibold">{name}</p>
            </div>
            <div className="flex w-full justify-end">
              <p className="text-gray-500">
                Updated {moment(pushed_at).fromNow()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Repositories;
