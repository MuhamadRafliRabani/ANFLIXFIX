"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "@/utility/store/store";
import { signIn, signUp } from "@/service/firebase";
import { useRouter } from "next/navigation";

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
    <section className="h-svh w-svw pt-20 md:pt-40 lg:pt-56" id="section-form">
      <form
        className="m-auto h-fit w-[90%] rounded-md border-[0.1px] border-white bg-transparent py-14 text-white shadow-md backdrop-blur-sm lg:w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="main-transition text-center text-2xl font-bold uppercase hover:text-[#E50914]">
          {URL === "sign-in" ? "Sign-In" : "Sign-Up"}
        </h1>
        <div className="mx-auto mb-5 w-11/12 md:w-[80%]">
          <label
            htmlFor="email"
            className="main-transition mb-2 block text-sm font-medium hover:text-[#b8b8b8]"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-full border-[0.5px] border-white bg-transparent p-2 text-sm text-slate-300 focus:border-none"
            placeholder="email"
            name="email"
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="mt-2 text-sm text-red-500">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mx-auto mb-5 block w-11/12 md:w-[80%]">
          <label
            htmlFor="password"
            className="main-transition mb-2 block text-sm font-medium hover:text-[#E50914]"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="white-palace w-full rounded-full border-[0.5px] border-white bg-transparent p-2 text-sm text-slate-300"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="mt-2 text-sm text-red-500">
              {formik.errors.password}
            </p>
          ) : (
            <p className="mt-2 text-sm text-yellow-400">
              Enter a password with at least 6 characters
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto block w-11/12 rounded-full bg-[#E50914] px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#c93940] md:w-[80%]"
        >
          {URL === "sign-in" ? "SIGN IN" : "SIGN UP"}
        </button>
      </form>
    </section>
  );
};

export default Auth;
