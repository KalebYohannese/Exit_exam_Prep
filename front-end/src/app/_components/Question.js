"use client";

import ButtonGrid from "@/components/Button";
import { FlagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Question({ questions }) {
  const [question, setQuestion] = useState(questions[0]);
  const [hint, setHint] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleNext() {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex < questions.length - 1) {
      setQuestion(questions[currentIndex + 1]);
      setHint(false);
      setSelectedOption(null);
    }
  }

  function handlePrevious() {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex > 0) {
      setQuestion(questions[currentIndex - 1]);
      setSelectedOption(null);
      setHint(false);
    }
  }

  function handleHint() {
    setHint((hint) => !hint);
  }

  function handleOptionChange(e) {
    setSelectedOption(Number(e.target.value));
  }

  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center">
        Computer Science Exit exam 2025
      </h1>
      <div className="py-24 grid grid-cols-[15%_55%_30%] gap-6 w-full">
        <div className="bg-gray-300 border max-h-40">
          <h1 className="text-xl font-bold">Question 1</h1>
          <h2>Not yet answered</h2>
          <h2>Marked out of</h2>
          <h3>1.00</h3>
          <div>
            <div className="flex items-center gap-2 mt-2 cursor-pointer hover:text-red-600">
              <FlagIcon className="h-5 w-5" />
              <span className="font-medium">Flag question</span>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-green-200 rounded-md p-3">
            <h1>{question.question}</h1>
            <div className="space-y-2 py-3">
              {question.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="answer" // All radios share the same name
                    value={index}
                    checked={selectedOption === index}
                    onChange={handleOptionChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </label>
              ))}
            </div>
            <div>
              <div className="py-3 flex justify-center space-x-3">
                <button
                  type="button"
                  className="border rounded-sm px-2 bg-white"
                  onClick={handleHint}
                >
                  Need a hint?
                </button>
                <button
                  type="button"
                  className="border rounded-sm px-2 bg-white"
                >
                  Get AI explanation
                </button>
              </div>
              <div>{hint && <p>{question.explanation}</p>}</div>
            </div>
          </div>
          <div className="flex justify-between py-3">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>

        <div className="bg-gray-100 border rounded-sm mr-9">
          <ButtonGrid />
        </div>
      </div>
    </div>
  );
}
