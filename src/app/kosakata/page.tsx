"use client";

import { useState } from "react";
import { wordOptions } from "../lib/data";
import Image from "next/image";

type WordOption = {
  text: string;
  value: string;
  image: string;
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<WordOption | null>(null);

  const onChange: React.ComponentProps<"select">["onChange"] = (e) => {
    const selectedValue = e.target.value;
    const option =
      wordOptions.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(option);
  };

  return (
    <main className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center p-4 md:px-10">
      <h1 className="block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text pb-8 text-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
        Apa Bahasa Arabnya...
      </h1>
      <div className="w-2/3 pb-8 lg:w-1/3">
        <select
          className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm outline-none"
          onChange={onChange}
          value={selectedOption?.value || ""}
        >
          <option value="" disabled>
            Pilih kata
          </option>
          {wordOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      {/* Card */}
      {selectedOption && (
        <div className="hover:shadow-primary cursor-default overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm transition">
          {selectedOption?.image ? (
            <Image
              className="aspect-[4/3] rounded-lg object-cover object-center"
              src={selectedOption.image}
              width={200}
              height={200}
              alt="gambar"
            />
          ) : (
            ""
          )}
          <p className="pb-4 pt-6 text-center text-4xl font-bold">
            {selectedOption?.value}
          </p>
        </div>
      )}
    </main>
  );
}
