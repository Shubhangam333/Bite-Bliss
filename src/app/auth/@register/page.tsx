"use client";

import { RegisterFormSchema } from "@/lib/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

type Inputs = z.infer<typeof RegisterFormSchema>;

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const [loading, setLoding] = useState(false);

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoding(true);
    const result = await registerUser(data);
    if (result.success) {
      setLoding(false);
      toast.success(result.message);
      setTimeout(() => {
        router.push("/");
        reset();
      }, 2000);
    } else {
      setLoding(false);
      toast.error(result.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-1 flex-col gap-4 w-full"
    >
      <input
        placeholder="First Name"
        className={`outline-none border-b-[1px] transition-all border-primary px-2 py-2 ${
          errors.firstname ? "text-red-400" : ""
        }`}
        {...register("firstname")}
      />
      {errors.firstname?.message && (
        <p className="text-sm text-red-400">{errors.firstname.message}</p>
      )}
      <input
        placeholder="Last Name"
        className={`outline-none border-b-[1px] transition-all border-primary px-2 py-2 ${
          errors.lastname ? "text-red-400" : ""
        }`}
        {...register("lastname")}
      />
      {errors.lastname?.message && (
        <p className="text-sm text-red-400">{errors.lastname.message}</p>
      )}
      <input
        placeholder="Email"
        className={`outline-none border-b-[1px] transition-all border-primary px-2 py-2 ${
          errors.email ? "text-red-400" : ""
        }`}
        {...register("email")}
      />
      {errors.email?.message && (
        <p className="text-sm text-red-400">{errors.email.message}</p>
      )}

      <input
        placeholder="Password"
        type="password"
        className={`outline-none border-b-[1px] transition-all border-primary px-2 py-2 ${
          errors.password ? "text-red-400" : ""
        }`}
        {...register("password")}
      />
      {errors.password?.message && (
        <p className="text-sm text-red-400">{errors.password.message}</p>
      )}
      <input
        placeholder="Confirm Password"
        type="password"
        className={`outline-none border-b-[1px] transition-all border-primary px-2 py-2 ${
          errors.confirmPassword ? "text-red-400" : ""
        }`}
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <p className="text-sm text-red-400">{errors.confirmPassword.message}</p>
      )}
      {loading ? (
        <button
          type="button"
          className="w-full flex items-center justify-center text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          <TailSpin
            height="20"
            width="20"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />{" "}
        </button>
      ) : (
        <button className="rounded-lg bg-primary py-2 text-white">
          Submit
        </button>
      )}
    </form>
  );
}
