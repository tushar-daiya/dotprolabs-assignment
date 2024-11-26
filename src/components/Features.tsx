import React from "react";
import {
  CommunicationIcon,
  DollarIcon,
  ShieldIcon,
  SupportIcon,
} from "./icons/icons";

export default function Features() {
  const data = [
    {
      icon: <DollarIcon />,
      title: "Cheapest TXs",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, pariatur quae deleniti iure",
    },
    {
      icon: <ShieldIcon />,
      title: "CerTIK",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, pariatur quae deleniti iure",
    },
    {
      icon: <CommunicationIcon />,
      title: "No Contract Sells",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, pariatur quae deleniti iure",
    },
    {
      icon: <SupportIcon />,
      title: "CrossDex Support",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, pariatur quae deleniti iure",
    },
  ];
  return (
    <section className="max-w-8xl mx-auto mt-20">
      <h2
        data-aos="fade-up"
        className="font-extrabold md:text-5xl sm:text-3xl text-2xl text-center font-neue"
      >
        Our <span className="text-primaryText">Features</span>
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mx-5 md:mt-8 mt-5"
      >
        {data.map((item, index) => (
          <div
            data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            key={index}
            className="bg-[#FFFFFF05] border border-white/5 p-8 rounded-2xl"
          >
            <div className="bg-white/10 p-4 rounded-full w-max">
              {item.icon}
            </div>
            <p className="mt-4 text-xl font-semibold">{item.title}</p>
            <p className="mt-2 text-[#B6B6B6]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
