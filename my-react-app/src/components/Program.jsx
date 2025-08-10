import React, { useState } from "react";

export default function Program({ program }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!program || program.length === 0) {
    return <p className="text-center mt-10">Программа пока не добавлена</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-20">
      <h1 className="text-3xl sm:text-4xl text-[#313743] text-center mb-6 font-bold">
        Программа тура
      </h1>

      {/* Кнопки дней */}
      <div className="flex overflow-x-auto space-x-2 mb-0 mt-10 pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {program.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap px-4 py-2 rounded-t-lg transition-colors duration-200 ${
              activeTab === idx
                ? "bg-[#313743] text-white font-bold"
                : "bg-[#4d535f] text-white hover:bg-[#5d636f]"
            }`}
          >
            {idx + 1} день
          </button>
        ))}
      </div>

      {/* Контент */}
      <div className="bg-[#313743] p-6 rounded-lg rounded-tl-none flex flex-col md:flex-row gap-6 mt-0">
        {/* Текст */}
        <div className="flex-1 text-white">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            {activeTab + 1} день
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {program[activeTab].events.map((event, i) => (
              <li key={i}>{event}</li>
            ))}
          </ul>
        </div>

        {/* Фото */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={program[activeTab].image}
            alt={`День ${activeTab + 1}`}
            className="rounded-lg object-cover w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
}
