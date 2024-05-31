"use client";
import { signIn, signUp } from "@/service/firebase";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUser } from "@/app/global/global_state/Collection_State";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ params }) => {
  const [errorMassage, setErrorMassage] = useState();
  const DecodeKeyword = decodeURI(params.auth);
  const Router = useRouter();
  const setUser = useUser((state) => state.setUser);

  const scemmaVal = yup.object({
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scemmaVal),
  });

  const onSignUp = async (value) => {
    const { email, password } = value;
    try {
      const DaftarAkun = await signUp(email, password);
      if (DaftarAkun) {
        Router.push("/");
        setUser(DaftarAkun);
      }
    } catch (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/email-already-in-use":
          setErrorMassage("Akun Anda sudah terdaftar. Silahkan login kembali.");
          break;
        case "auth/invalid-email":
          setErrorMassage(
            "Email yang Anda masukkan tidak valid. Harap periksa kembali."
          );
          break;
        case "auth/user-disabled":
          setErrorMassage(
            "Akun Anda telah dinonaktifkan oleh administrator. Silakan hubungi dukungan untuk bantuan lebih lanjut."
          );
          break;
        case "auth/user-not-found":
          setErrorMassage(
            "Akun tidak ditemukan. Silakan daftar jika Anda belum memiliki akun."
          );
          break;
        case "auth/wrong-password":
          setErrorMassage(
            "Kata sandi yang Anda masukkan salah. Silakan coba lagi."
          );
          break;
        case "auth/network-request-failed":
          setErrorMassage(
            "Terdapat masalah jaringan. Silakan coba lagi nanti."
          );
          break;
        case "auth/too-many-requests":
          setErrorMassage(
            "Terlalu banyak percobaan masuk. Silakan coba lagi nanti."
          );
          break;
        case "auth/operation-not-allowed":
          setErrorMassage(
            "Operasi ini tidak diizinkan. Silakan hubungi administrator."
          );
          break;
        default:
          setErrorMassage(
            "Terjadi kesalahan saat masuk. Silakan coba lagi nanti."
          );
          break;
      }
    }
  };

  const onSignIn = async (value) => {
    const { email, password } = value;
    console.log(value);
    try {
      const DaftarAkun = await signIn(email, password);
      if (DaftarAkun) {
        Router.back();
        setUser(DaftarAkun);
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMassage(
            "Email yang Anda masukkan tidak valid. Harap periksa kembali."
          );
          break;
        case "auth/user-disabled":
          setErrorMassage(
            "Akun Anda telah dinonaktifkan oleh administrator. Silakan hubungi dukungan untuk bantuan lebih lanjut."
          );
          break;
        case "auth/user-not-found":
          setErrorMassage(
            "Akun tidak ditemukan. Silakan daftar jika Anda belum memiliki akun."
          );
          break;
        case "auth/wrong-password":
          setErrorMassage(
            "Kata sandi yang Anda masukkan salah. Silakan coba lagi."
          );
          break;
        case "auth/network-request-failed":
          setErrorMassage(
            "Terdapat masalah jaringan. Silakan coba lagi nanti."
          );
          break;
        case "auth/too-many-requests":
          setErrorMassage(
            "Terlalu banyak percobaan masuk. Silakan coba lagi nanti."
          );
          break;
        case "auth/operation-not-allowed":
          setErrorMassage(
            "Operasi ini tidak diizinkan. Silakan hubungi administrator."
          );
          break;
        default:
          setErrorMassage(
            "Terjadi kesalahan saat masuk. Silakan coba lagi nanti."
          );
          break;
      }
    }
  };

  const user = useUser((state) => state.user);

  return (
    <section className="w-svw h-svh pt-20 lg:pt-56" id="section-form">
      {user ? (
        <form
          className="m-auto  text-white w-[60%] bg-transparent backdrop-blur-sm h-fit py-14 shadow-md border-white border-[0.1px] rounded-md lg:w-[20%]"
          onSubmit={handleSubmit(
            DecodeKeyword === "Sign-up" ? onSignUp : onSignIn
          )}
        >
          <h1 className="text-center text-2xl font-bold hover:text-[#E50914] main-transition">
            {DecodeKeyword === "Sign-in" ? "Sign-In" : "Sign-Up"}
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
              required
              {...register("email", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
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
              required
              {...register("password", { required: true, min: 6, max: 15 })}
            />
            {errors.password?.message ? (
              <p className="text-red-500 text-sm mt-2">
                {errors.password?.message}
              </p>
            ) : (
              <p className="text-yellow-400 text-sm mt-2">
                masukan password dengan min 6 carakter
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-black font-semibold bg-[#E50914] hover:bg-[#c93940] rounded-full text-sm px-5 py-2.5 text-center w-11/12 md:w-[80%] block mx-auto"
          >
            {DecodeKeyword === "Sign-in" ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>
      ) : (
        Router.back()
      )}

      {/* <div className="form-backdrop bg-transparent absolute inset-0 z-10"></div> */}
    </section>
  );
};

export default Form;
