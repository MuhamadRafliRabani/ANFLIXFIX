"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "@/utility/store/store";
import { signIn, signUp } from "@/service/firebase";
import { useRouter } from "next/navigation";
import Slide from "@/app/Components/auth/slide";
import Link from "next/link";

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
      <div className="bg-authBackround container box-border flex h-full min-h-full flex-1 items-center justify-center rounded-lg shadow-md md:p-4">
        <Slide />
        <div className="h-full w-full p-36 text-white">
          <form className="max-w-lg">
            <div className="space-y-6">
              <h1 className="text-4xl font-medium">Create an account</h1>
              <p className="text-base text-slate-500">
                already have an account?{" "}
                <span className="text-primary underline">Log in</span>
              </p>
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
            <div className="mt-20 w-full">
              <button className="w-full rounded-md bg-primary py-3">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
