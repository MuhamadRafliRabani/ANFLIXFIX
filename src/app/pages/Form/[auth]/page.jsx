"use client";
import { signIn, signUp } from "@/service/firebase";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUser } from "@/app/Collection_State";

const Form = ({ params }) => {
  const [errorMassage, setErrorMassage] = useState();
  const DecodeKeyword = decodeURI(params.auth);
  const Router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const setUser = useUser((state) => state.setUser);

  const onSignUp = async (value) => {
    const { email, password } = value;
    try {
      const DaftarAkun = await signUp(email, password);
      if (DaftarAkun) {
        setErrorMassage("anda berhasil daftar");
        Router.back();
        console.log(DaftarAkun);
      }
    } catch (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/email-already-in-use":
          setErrorMassage("Akun Anda sudah terdaftar. Silahkan login kembali.");
          break;
        case "auth/invalid-email":
          setErrorMassage("Email yang Anda masukkan tidak valid. Harap periksa kembali.");
          break;
        case "auth/user-disabled":
          setErrorMassage("Akun Anda telah dinonaktifkan oleh administrator. Silakan hubungi dukungan untuk bantuan lebih lanjut.");
          break;
        case "auth/user-not-found":
          setErrorMassage("Akun tidak ditemukan. Silakan daftar jika Anda belum memiliki akun.");
          break;
        case "auth/wrong-password":
          setErrorMassage("Kata sandi yang Anda masukkan salah. Silakan coba lagi.");
          break;
        case "auth/network-request-failed":
          setErrorMassage("Terdapat masalah jaringan. Silakan coba lagi nanti.");
          break;
        case "auth/too-many-requests":
          setErrorMassage("Terlalu banyak percobaan masuk. Silakan coba lagi nanti.");
          break;
        case "auth/operation-not-allowed":
          setErrorMassage("Operasi ini tidak diizinkan. Silakan hubungi administrator.");
          break;
        default:
          setErrorMassage("Terjadi kesalahan saat masuk. Silakan coba lagi nanti.");
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
        setErrorMassage("anda berhasil masuk");
        Router.back();
        setUser(DaftarAkun);
        console.log(DaftarAkun);
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMassage("Email yang Anda masukkan tidak valid. Harap periksa kembali.");
          break;
        case "auth/user-disabled":
          setErrorMassage("Akun Anda telah dinonaktifkan oleh administrator. Silakan hubungi dukungan untuk bantuan lebih lanjut.");
          break;
        case "auth/user-not-found":
          setErrorMassage("Akun tidak ditemukan. Silakan daftar jika Anda belum memiliki akun.");
          break;
        case "auth/wrong-password":
          setErrorMassage("Kata sandi yang Anda masukkan salah. Silakan coba lagi.");
          break;
        case "auth/network-request-failed":
          setErrorMassage("Terdapat masalah jaringan. Silakan coba lagi nanti.");
          break;
        case "auth/too-many-requests":
          setErrorMassage("Terlalu banyak percobaan masuk. Silakan coba lagi nanti.");
          break;
        case "auth/operation-not-allowed":
          setErrorMassage("Operasi ini tidak diizinkan. Silakan hubungi administrator.");
          break;
        default:
          setErrorMassage("Terjadi kesalahan saat masuk. Silakan coba lagi nanti.");
          break;
      }
    }
  };

  const user = useUser((state) => state.user);

  return (
    <section className="w-svw h-svh" id="section-form">
      {user ? (
        Router.back()
      ) : (
        <form className="mx-auto pt-24 text-white w-4/5" onSubmit={handleSubmit(DecodeKeyword === "Sign-up" ? onSignUp : onSignIn)}>
          <h1 className="text-center text-2xl font-bold hover:text-[#E50914] main-transition">{DecodeKeyword === "Sign-in" ? "Sign-In" : "Sign-Up"}</h1>
          <div className="mb-5 mx-auto block w-[40%]">
            <label htmlFor="email" className="block mb-2 text-sm font-medium hover:text-[#E50914] main-transition">
              Your email
            </label>
            <input type="email" id="email" className="bg-white bg-opacity-30 text-white text-sm rounded-full w-full p-2" placeholder=" " required {...register("email", { required: true })} />
            {errorMassage && <p className="text-red-500 text-sm mt-2">{errorMassage}</p>}
            <label
              htmlFor="password"
              className="absolute left-2 top-2 text-white text-sm peer-placeholder-shown:text-opacity-50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-opacity-100"
            >
              Your email
            </label>
          </div>
          <div className="mb-5 mx-auto block w-[40%]">
            <label htmlFor="password" className="block mb-2 text-sm font-medium hover:text-[#E50914] main-transition">
              Your password
            </label>
            <input type="password" id="password" className="white-palace bg-white bg-opacity-30 text-white text-sm rounded-full w-full p-2" placeholder=" " required {...register("password", { required: true })} />
            {errorMassage === "auth/wrong-password" && <p className="text-red-500 text-sm mt-2">sandi anda salah</p>}
            <span id="password-help" className="text-sm text-yellow-500">
              Your password must be 8-20 characters long.
            </span>
          </div>
          <button type="submit" className="text-black font-semibold bg-[#E50914] hover:bg-[#c93940] rounded-full text-sm px-5 py-2.5 text-center w-[40%] block mx-auto">
            {DecodeKeyword === "Sign-in" ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>
      )}
      {/* <div className="form-backdrop bg-white bg-opacity-30 absolute inset-0 z-10"></div> */}
    </section>
  );
};

export default Form;
