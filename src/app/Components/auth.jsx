import Link from "next/link";
import Button from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { userSessions } from "@/libs/auth-session";

const Auth = () => {
  const { user } = userSessions();

  return (
    <div className="hidden min-w-60 text-base md:flex md:items-center md:justify-evenly md:gap-2">
      <Link href="/user/dashboard">
        <p className="whitespace-nowrap text-[0.91rem]">My dasbord</p>
      </Link>
      {user ? (
        <Button action={() => signOut()} text="Sign Out" width="w-1/2" second />
      ) : (
        <Button action={() => signIn()} second text="Sign In" width="w-1/2" />
      )}
    </div>
  );
};

export default Auth;
