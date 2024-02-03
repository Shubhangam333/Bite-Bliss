"use client";

import { setScreen } from "@/redux/slice/AuthScreenSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();
  const { isLogIn } = useSelector((state: RootState) => state.authScreen);

  return (
    <section className="flex flex-col gap-2 items-center">
      <h2 className="text-5xl font-light text-primary whitespace-nowrap">
        Bite Bliss
      </h2>
      <div className="flex gap-6 text-md text-[#373743]">
        <div
          className={`border-b-2 w-24  flex justify-center pb-2 ${
            isLogIn ? "border-primary text-primary" : "border-none"
          }`}
        >
          <button
            className="uppercase"
            onClick={() => dispatch(setScreen(true))}
          >
            Sign In
          </button>
        </div>
        <div
          className={`border-b-2 w-24  flex justify-center pb-2 ${
            isLogIn ? "border-none" : "border-primary text-primary"
          }`}
        >
          <button
            className="uppercase"
            onClick={() => dispatch(setScreen(false))}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
