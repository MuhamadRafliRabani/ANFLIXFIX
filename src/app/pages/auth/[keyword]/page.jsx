"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "@/utility/store/store";
import { signIn, signUp } from "@/service/firebase";
import { useRouter } from "next/navigation";
import Slide from "@/app/Components/auth/slide";
import Link from "next/link";
import Image from "next/image";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password cannot exceed 15 characters")
    .required("Required"),
});

const Auth = ({ params }) => {
  const router = useRouter();
  const { setUser, user } = useUser();
  const URL = decodeURI(params.keyword);

  console.log(URL);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      const user =
        URL === "sign-in" ? await signIn(values) : await signUp(values);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      router.push("/");
    },
  });

  console.log(user);

  return (
    <section className="h-svh w-svw md:p-4" id="section-form">
      <div className="container box-border flex h-full min-h-full flex-1 items-center justify-center rounded-lg bg-authBackround shadow-md md:p-4">
        <Slide />
        <div className="h-full w-full p-36 text-white">
          <form className="max-w-lg">
            <div className="space-y-6">
              <h1 className="text-4xl font-medium">
                {URL === "sign-up"
                  ? "Create an account."
                  : "Sign in to your account."}
              </h1>
              {URL === "sign-up" ? (
                <p className="text-base text-slate-500">
                  already have an account?{" "}
                  <Link
                    href="/pages/auth/sign-in"
                    className="text-primary underline"
                  >
                    Log in
                  </Link>
                </p>
              ) : (
                <p className="text-base text-slate-500">
                  Don`t have account yet?{" "}
                  <Link
                    href="/pages/auth/sign-up"
                    className="text-primary underline"
                  >
                    Sign up
                  </Link>
                </p>
              )}
            </div>
            <div className="mt-10 w-full space-y-5">
              <div className="flex w-full items-center space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 rounded-md bg-[#3B364C] p-3 px-5 text-sm outline-1 outline-offset-0 outline-primary placeholder:text-sm focus:outline"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 rounded-md bg-[#3B364C] p-3 px-5 text-sm outline-1 outline-offset-0 outline-primary placeholder:text-sm focus:outline"
                />
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md bg-[#3B364C] p-3 px-5 text-sm outline-1 outline-offset-0 outline-primary placeholder:text-sm focus:outline"
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md bg-[#3B364C] p-3 px-5 text-sm outline-1 outline-offset-0 outline-primary placeholder:text-sm focus:outline"
                />
              </div>
              <div className="flex w-full items-center space-x-4 text-sm">
                <input
                  type="checkbox"
                  name="agree"
                  className="size-5 text-black focus:bg-white"
                />
                <p>
                  I agree to the{" "}
                  <Link href="/" className="text-primary underline">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-14 w-full">
              <button className="w-full rounded-md bg-primary py-3">
                {URL === "sign-up" ? "Create account" : "Login"}
              </button>
            </div>
            <div className="mt-5 flex w-full items-center justify-center space-x-4">
              <hr className="w-full border-slate-500" />
              <p className="whitespace-nowrap text-sm font-thin text-slate-500">
                Or register with
              </p>
              <hr className="w-full border-slate-500" />
            </div>
            <div className="mt-5 flex w-full items-center justify-center space-x-4">
              <button className="flex w-full items-center justify-center space-x-2 rounded-md border border-slate-300 bg-transparent py-2 font-light">
                <Image
                  alt="Google image"
                  src="/Google.png"
                  width={45}
                  height={45}
                />{" "}
                Google
              </button>
              <button className="flex w-full items-center justify-center space-x-2 rounded-md border border-slate-300 bg-transparent py-2 font-light">
                <Image
                  alt="GitHub image"
                  src="/Github.png"
                  width={45}
                  height={45}
                />{" "}
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
