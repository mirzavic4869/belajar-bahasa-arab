'use client';

import { useState } from 'react';
import { wordOptions } from '../lib/data';
import Image from 'next/image';

type WordOption = {
  text: string;
  value: string;
  image: string;
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<WordOption | null>(null);

  const onChange: React.ComponentProps<'select'>['onChange'] = (e) => {
    const selectedValue = e.target.value;
    const option = wordOptions.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(option);
  };

  return (
    <main className="mx-auto flex flex-col items-center h-screen justify-center md:px-10 p-4 max-w-7xl">
      <h1 className="block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center pb-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Apa Bahasa Arabnya...</h1>
      <div className="pb-8 lg:w-1/3 w-2/3">
        <select className="bg-gray-800 border w-full border-gray-700 p-4 shadow-sm  outline-none rounded-lg" onChange={onChange} value={selectedOption?.value || ''}>
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
        <div className="bg-gray-800 overflow-hidden rounded-lg border border-gray-700 p-4 shadow-sm transition hover:shadow-primary cursor-default">
          {selectedOption?.image ? <Image className="aspect-[4/3] rounded-lg object-cover object-center" src={selectedOption.image} width={200} height={200} alt="gambar" /> : ''}
          <p className="text-center pt-6 pb-4 text-4xl font-bold">{selectedOption?.value}</p>
        </div>
      )}
    </main>
  );
}
