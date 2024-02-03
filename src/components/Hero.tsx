import Image from "next/image";
import primaryImage from "@/assets/images/hero-3.webp";
import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex h-[30rem] justify-between items-center ">
      <div className=" flex flex-col gap-4">
        <h4 className="text-2xl font-bold">Let's start cooking with</h4>
        <h1 className="text-3xl text-primary font-bold uppercase">
          Popular Recipes
        </h1>
        <p className="max-w-[25rem]">
          With Bite Bliss, you can prepare dishes just the way you like it --
          everytime. Buy quality ingredients that you lack for cooking.
        </p>
        <button className="self-start bg-primary px-2 py-2 text-white rounded-full flex gap-2 items-center">
          <span>Discover Recipes</span>{" "}
          <MdArrowOutward className="bg-white text-primary rounded-full text-lg" />
        </button>
      </div>
      <div className="relative">
        <Image
          src={primaryImage}
          alt="hero image"
          className="h-[500px] w-[500px] object-cover object-center rounded-full"
        />
      </div>
    </section>
  );
}
