import Image from "next/image";
import { RedditIcon, TelegramIcon, TwitterIcon } from "./icons/icons";

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
          <li>About Us</li>
          <li>Roadmap</li>
          <li>FAQs</li>
          <li>Contact Us</li>
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
