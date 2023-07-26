import Image from "next/image";

function PublicNavigation() {
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-0
          px-8
          text-lg
          bg-white
          h-[80px]
          fixed
        "
    >
      <img src="/logo.svg" className="h-[66%]" alt="fulltimeforce logo" />
    </nav>
  );
}

export default PublicNavigation;
