import Image from "next/image";
import React from "react";
import { CheckIcon, CrossIcon } from "@/components/icons/icons";
export default function Comparison() {
  const data = [
    {
      point: "Point Number 1",
      moonEx: true,
      uniswap: false,
    },
    {
      point: "Point Number 2",
      moonEx: true,
      uniswap: false,
    },
    {
      point: "Point Number 3",
      moonEx: true,
      uniswap: false,
    },
    {
      point: "Point Number 4",
      moonEx: true,
      uniswap: false,
    },
    {
      point: "Point Number 5",
      moonEx: true,
      uniswap: false,
    },
  ];
  return (
    <section className="max-w-8xl mx-auto">
      <h2
        data-aos="fade-up"
        className="font-extrabold md:text-5xl sm:text-3xl text-2xl font-neue ml-5"
      >
        Why <span className="text-primaryText">MoonEX</span>?
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-[#FFFFFF05] rounded-lg md:p-10 p-5 mx-5 md:mt-8 relative mt-5"
      >
        <div className="lg:h-80 lg:w-80 md:w-60 md:h-60 w-40 h-40 rounded-full bg-gradient-to-b absolute -bottom-10 left-52 from-[#edd955] to-[#EDD9551C] md:blur-[200px] blur-[100px]"></div>
        <table className="w-full">
          <thead>
            <tr className="h-20">
              <th className="text-primaryText md:text-3xl sm:text-xl text-sm w-[40%]">
                Comparison
              </th>
              <th className="w-[30%]">
                <Image
                  src={"/logo.png"}
                  width={100}
                  height={100}
                  className="mx-auto md:h-12 h-8 w-auto"
                  alt="logo"
                />
              </th>
              <th className="w-[30%]">
                <Image
                  src={"/uniswap.png"}
                  width={100}
                  height={100}
                  className="mx-auto md:h-12 h-8 w-auto"
                  alt="logo"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="md:px-10">{item.point}</td>
                <td className="text-center">
                  {item.moonEx === true ? <CheckIcon /> : <CrossIcon />}
                </td>
                <td className="text-center">
                  {item.uniswap === true ? <CheckIcon /> : <CrossIcon />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
