"use client";

import { useState } from "react";
import Accordion from "./ui/Accordion";

export default function FAQs() {
  const data = [
    {
      id: 1,
      question: "What is a DEX?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, explicabo.",
    },
    {
      id: 2,
      question: "What is a DEX?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, explicabo.",
    },
    {
      id: 3,
      question: "What is a DEX?",
      answer:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, explicabo.",
    },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(id: number) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }
  return (
    <div className="relative">
      <div className="lg:h-60 lg:w-60 md:w-40 md:h-40 w-20 h-20 rounded-full bg-gradient-to-b absolute -bottom-10 md:-left-10 left-0 from-[#edd955] to-[#EDD9551C] md:blur-[150px] blur-[100px]"></div>

      <div className="lg:h-60 lg:w-60 md:w-40 md:h-40 w-20 h-20 rounded-full bg-gradient-to-b absolute -top-10 md:-right-10 right-0 from-[#edd955] to-[#EDD9551C] md:blur-[150px] blur-[100px]"></div>
      <section data-aos="fade-up" className="max-w-8xl mx-auto mt-20 mb-20">
        <div className="bg-[#FFFFFF05] rounded-lg mx-5 pb-8">
          <h2 className="font-extrabold md:text-5xl sm:text-3xl text-primaryText py-8 text-2xl text-center font-neue">
            FAQs
          </h2>
          <div>
            {data?.map((item) => (
              <Accordion
                key={item.id}
                handleSelect={handleSelect}
                selected={selected}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
