"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "@/utility/store/store";
import { signIn } from "@/service/firebase";
import { useRouter } from "next/navigation";

// Define your validation schema
const validationSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password cannot exceed 15 characters")
    .required("Required"),
});

const Form = ({ params }) => {
  const router = useRouter();
  const { setUser, user } = useUser();
  const URL = decodeURI(params.auth);

  // Use formik for form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      const user =
        URL === "Sign-in" ? await signIn(values) : await signUp(values);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      router.push("/");
    },
  });

  console.log(user);

  return (
    <section className="w-svw h-svh pt-20 md:pt-40 lg:pt-56" id="section-form">
      <form
        className="m-auto py-14 text-white w-[65%] h-fit bg-transparent backdrop-blur-sm shadow-md border-white border-[0.1px] rounded-md lg:w-[20%]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold hover:text-[#E50914] main-transition">
          {URL === "Sign-in" ? "Sign-In" : "Sign-Up"}
        </h1>
        <div className="mb-5 mx-auto w-11/12 md:w-[80%]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium hover:text-[#b8b8b8] main-transition"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border-[0.5px] border-white text-sm rounded-full text-slate-300 w-full p-2 focus:border-none"
            placeholder="email"
            name="email"
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-5 mx-auto block w-11/12 md:w-[80%]">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium hover:text-[#E50914] main-transition"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="white-palace bg-transparent border-[0.5px] border-white text-slate-300 text-sm rounded-full w-full p-2"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.password}
            </p>
          ) : (
            <p className="text-yellow-400 text-sm mt-2">
              Enter a password with at least 6 characters
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-black font-semibold bg-[#E50914] hover:bg-[#c93940] rounded-full text-sm px-5 py-2.5 text-center w-11/12 md:w-[80%] block mx-auto"
        >
          {URL === "Sign-in" ? "SIGN IN" : "SIGN UP"}
        </button>
      </form>
    </section>
  );
};

export default Form;
