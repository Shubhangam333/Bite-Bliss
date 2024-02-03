"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Layout({
  children,
  login,
  register,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  register: React.ReactNode;
}) {
  const { isLogIn } = useSelector((state: RootState) => state.authScreen);
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl bg-[url('https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress')] bg-cover h-[800px] w-full bg-center bg-no-repeat ">
      <section className="bg-white md:w-[25rem] z-[400]  rounded-lg py-4 px-12 flex gap-2 flex-col items-center">
        {children}
        {isLogIn && login}
        {!isLogIn && register}
      </section>
    </section>
  );
}
