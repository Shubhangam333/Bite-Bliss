"use client";

import { LoginFormSchema } from "@/lib/schema";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/services/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { setUserData } from "@/redux/slice/UserSlice";
import { TailSpin } from "react-loader-spinner";

type Inputs = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const [loading, setLoding] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const Router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setLoding(true);

    const res = await loginUser(data);
    if (res.success) {
      setLoding(false);
      reset();
      Cookies.set("token", res?.finalData?.token);
      localStorage.setItem("user", JSON.stringify(res?.finalData?.user));
      const userData = localStorage.getItem("user");
      const userDataString = typeof userData === "string" ? userData : "";
      dispatch(setUserData(JSON.parse(userDataString)));
      if (res?.finalData?.user?.role === "admin") {
        Router.push("/Dashboard");
      } else {
        Router.push("/");
      }
    } else {
      setLoding(false);
      reset();
      toast.error(res.message);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      Router.push("/");
    }
  }, [Router]);

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-1 flex-col gap-4 w-full"
    >
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
