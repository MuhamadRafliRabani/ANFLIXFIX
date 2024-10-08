import Image from "next/image";
import Link from "next/link";

const Oauth = () => {
  return (
    <div className="mt-5 flex w-full items-center justify-center space-x-4">
      <Link
        href="/api/auth/signin"
        className="flex w-full items-center justify-center space-x-2 rounded-md border border-slate-300 bg-transparent py-2 font-light"
      >
        <Image alt="Google image" src="/Google.png" width={45} height={45} />{" "}
        Google
      </Link>
      <Link
        href="/api/auth/signin"
        className="flex w-full items-center justify-center space-x-2 rounded-md border border-slate-300 bg-transparent py-2 font-light"
      >
        <Image alt="GitHub image" src="/Github.png" width={45} height={45} />{" "}
        GitHub
      </Link>
    </div>
  );
};

export default Oauth;
