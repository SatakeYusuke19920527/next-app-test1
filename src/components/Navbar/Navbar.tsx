import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between navbar navbar-expand-lg bg-gray-800 text-white">
      <div className="grid md:grid-cols-10 grid-cols-4 container-fluid w-full md:px-6 px-2">
        <div
          className="flex bg-grey-light rounded-md w-full md:col-span-9 col-span-3 p-2"
          aria-label="breadcrumb1"
        >
          <h1 className="px-4 py-2 text-2xl font-bold cursor-pointer">AppRouter</h1>
        </div>
        <div
          className="bg-grey-light rounded-md w-full col-span-1 p-2 grid grid-cols-1 place-items-center h-full"
          aria-label="breadcrumb1"
        >
          <div
            className="bg-grey-light rounded-md w-full col-span-1 text-right gap-3"
            aria-label="breadcrumb2"
          >
            <Link href={`/auth`} className="hover:text-gray-600">
              ログイン
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
