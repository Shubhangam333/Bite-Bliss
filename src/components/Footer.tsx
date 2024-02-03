import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";

type NavItems = {
  label: string;
  link: string;
};

const navItems: NavItems[] = [
  {
    label: "Payment & Tax",
    link: "#",
  },
  {
    label: "Terms of Service",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "About Us",
    link: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex md:flex-row flex-col md:justify-between gap-4 z-[90000]  md:items-start items-center text-white h-full w-full max-w-7xl bg-[#E1611F] px-16 py-12 ">
      <div className="flex flex-col gap-2 w-full items-center">
        <h2 className="text-3xl font-bold  self-center cursor-pointer whitespace-nowrap">
          Bite Bliss
        </h2>
        <p className=" text-md opacity-80 text-center">
          Recipes that you want to make. Cooking advice that works. Restaurant
          recommendation you trust.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-lg font-normal  cursor-pointer whitespace-nowrap">
          Support
        </h2>
        <ul className="flex flex-col gap-2 opacity-80">
          {navItems.map((d, i) => (
            <li key={i}>
              <Link href={d.link} className="font-light whitespace-nowrap">
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-full  items-center ">
        <h2 className="text-lg font-normal cursor-pointer whitespace-nowrap">
          Get in Touch
        </h2>
        <ul className="flex gap-2 opacity-80 flex-col">
          <li>
            <Link href="" className="font-light ">
              bliss@gmail.com
            </Link>
          </li>
          <li>
            <span className="font-light ">+92 036666666</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 w-full  items-center ">
        <h2 className="text-lg font-normal  cursor-pointer whitespace-nowrap ">
          Social Networking
        </h2>
        <ul className="flex gap-4 opacity-80  ">
          <li>
            <Link href="" className="font-light ">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="" className="font-light ">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="" className="font-light ">
              <FaPinterestP />
            </Link>
          </li>
          <li>
            <Link href="" className="font-light ">
              <BsTwitterX />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
