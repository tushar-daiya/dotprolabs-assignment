import Link from "next/link";
import { Star } from "./icons/icons";

export default function Header() {
  return (
    <>
      <div className="absolute eclipse1 -z-50 -right-40 top-0"></div>
      <div className="absolute eclipse2 -z-50 right-20 top-24"></div>
      <div className="absolute eclipse3 -z-50 right-64 top-48"></div>

      <div className="lg:h-80 lg:w-80 md:w-60 md:h-60 w-40 h-40 absolute lg:top-40 lg:right-40 right-10 top-48 -z-10 bg-gradient-to-br from-[#FFF6D7] via-[#f7ce3c] to-[#E4B40D] rounded-full shadow-2xl animate-spin shadow-black"></div>

      <Star className="absolute top-40 left-10 animate-pulse" />
      <Star className="absolute bottom-40 md:right-40 right-5 animate-pulse" />

      <div className="lg:h-80 lg:w-80 md:w-60 md:h-60 w-40 h-40 rounded-full bg-gradient-to-b absolute top-10 left-10 from-[#edd955] to-[#EDD9551C] md:blur-[200px] blur-[100px]"></div>
      <div className="lg:h-80 lg:w-80 md:w-60 md:h-60 w-40 h-40 rounded-full bg-gradient-to-b absolute md:top-96 bottom-40 md:right-40 right-0 from-[#edd955] to-[#EDD9551C] lg:blur-[200px] md:blur-[150px] blur-[100px]"></div>

      <div className="md:my-52 my-72 max-w-8xl mx-auto px-5">
        <h1
          data-aos="fade-up"
          className="md:text-7xl sm:text-5xl text-3xl font-neue font-extrabold"
        >
          Trusted Multi-Chain <br />
          <span className="text-primaryText">DEX </span>
          Platform
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:text-2xl sm:text-xl text-lg text-[#9E9E9E] font-neue md:mt-4 mt-2"
        >
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex gap-5 md:mt-10 mt-5"
        >
          <Link
            href={"/"}
            className="px-4 py-2 rounded-3xl bg-gradient-to-r text-sm from-[#E4B40D] to-[#FFE68FD6] text-black font-extrabold"
          >
            Connect Wallet
          </Link>
          <Link
            href={"/"}
            className="px-6 py-2 rounded-3xl border-[#E4B40D] border text-sm  text-primaryText font-extrabold"
          >
            Trade Crypto
          </Link>
        </div>
      </div>
    </>
  );
}
