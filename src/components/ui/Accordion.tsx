import { ChevronUp } from "lucide-react";
import React, { useRef } from "react";

type Props = {
  handleSelect: (id: number) => void;
  selected: number | null;
  item: {
    id: number;
    question: string;
    answer: string;
  };
};

export default function Accordion({ handleSelect, selected, item }: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  return (
    <div
      onClick={() => handleSelect(item.id)}
      key={item.id}
      className="border-b border-white/5 first:border-t lg:px-20 md:px-14 px-10 py-8 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{item.question}</p>
        <button>
          <ChevronUp
            className={`${
              selected === item.id ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>
      </div>
      <div
        style={{
          height: selected === item.id ? ref.current?.offsetHeight || 0 : 0,
        }}
        className="overflow-y-hidden transition-all"
      >
        <p ref={ref} className={`py-2 text-[#B6B6B6]`}>
          {item.answer}
        </p>
      </div>
    </div>
  );
}
