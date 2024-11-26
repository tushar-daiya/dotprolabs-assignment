import Image from "next/image";
import { RedditIcon, TelegramIcon, TwitterIcon } from "./icons/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t border-white/5 md:h-80 h-96 py-10">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-between h-full px-5">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className="h-20 w-auto"
          alt="logo"
        />
        <ul className="flex font-extrabold text-lg items-center md:space-x-10 space-x-4">
          <Link className="hover:text-primaryText" href={"/"}>
            <li>About Us</li>
          </Link>
          <Link className="hover:text-primaryText" href={"/"}>
            <li>Roadmap</li>
          </Link>
          <Link className="hover:text-primaryText" href={"/"}>
            <li>FAQs</li>
          </Link>
          <Link className="hover:text-primaryText" href={"/"}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <div>
          <p className="font-extrabold text-2xl text-center">
            Contact <span className="text-primaryText">Us</span>
          </p>
          <div className="flex items-center space-x-5 mt-3">
            <TwitterIcon />
            <RedditIcon />
            <TelegramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
