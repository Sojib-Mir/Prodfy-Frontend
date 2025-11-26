"use client";
import React, { useState } from "react";
import Link from "next/link";
import useAuth from "@/hook/useAuth";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    registerEmailAndPassword,
    profileUpdate,
    loginGoogle,
    setLoading,
    setUser,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleRegister = (data) => {
    const profileImg = data.photo[0];
    registerEmailAndPassword(data.email, data.password)
      .then(async (res) => {
        const user = res.user;
        // 1. Image Upload Logic
        const formData = new FormData();
        formData.append("image", profileImg);

        const img_API_URL = `https://api.imgbb.com/1/upload?key=a3add781e3706419235e4e29b105fcec`;
        const imgRes = await axios.post(img_API_URL, formData);

        // 2. Profile Update Logic
        const userProfile = {
          displayName: data.name,
          photoURL: imgRes.data.data.url,
        };
        await profileUpdate(userProfile);

        // 3. Get Token & Set Cookie (Crucial for proxy)
        const token = await user.getIdToken();
        Cookies.set("fbToken", token, { path: "/" });
        router.push("/");
      })
      .catch((e) => {
        console.error(e);
        alert(e.message);
      });
  };

  // Goole Login
  const handleGooglSignin = () => {
    loginGoogle()
      .then(async (res) => {
        setLoading(false);
        setUser(res.user);

        // Get Token & Set Cookie
        const token = await res.user.getIdToken();
        Cookies.set("fbToken", token, { path: "/" });
        router.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="card bg-base-100 w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl border border-pink-500/20 my-30 md:my-17">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>

        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is Required!</p>
            )}

            {/* photo */}
            <label className="">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full focus:border-0 focus:outline-sky-300"
              placeholder="Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is Required!</p>
            )}

            {/* Email */}
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required!</p>
            )}

            {/* Password */}
            <div className="relative space-y-2">
              <label className="block mt-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                className="input w-full rounded focus:border-0 focus:outline-sky-300"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is Required!</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 characters or longer!
                </p>
              )}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-lg right-4 top-10 cursor-pointer z-50"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>

            <button
              type="submit"
              className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
            >
              Register
            </button>
          </fieldset>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 bg-gray-500"></div>
          <span className="text-sm">or</span>
          <div className="h-px w-16 bg-gray-500"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGooglSignin}
          className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center mt-3">
          Already have an account? Please{" "}
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-800 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
