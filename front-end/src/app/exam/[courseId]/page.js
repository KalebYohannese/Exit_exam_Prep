"use client";

import ButtonGrid from "@/components/Button";
import { FlagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// export async function generateMetadata({ params }) {
//   const { name } = await getExam(params.courseId);
//   return {
//     title: `${name} Exam`,
//   };
// }

const questions = [
  {
    id: 1,
    question:
      "A process is terminated by the operating system due to a reference to non-existing memory. Which one of the following best explains the process termination?",
    options: [
      "Error exit",
      "Fatal exit",
      "Normal exit",
      "Terminated by another process",
    ],
    correctAnswer: 1,
    explanation:
      "A fatal exit occurs when a process attempts to access memory that doesn't exist (segmentation fault). This is a severe error that forces the OS to terminate the process.",
  },
  {
    id: 2,
    question:
      "Size of large data files can be reduced to save storage disk space. Which algorithm is appropriate to reduce size of large files?",
    options: [
      "Merge sort algorithm",
      "Huffman encoding algorithm",
      "Heap sort algorithm",
      "Prim's algorithm",
    ],
    correctAnswer: 1,
    explanation:
      "Huffman encoding is a lossless data compression algorithm that uses variable-length codes to represent data, with more frequent data items getting shorter codes, thus reducing overall file size.",
  },
  {
    id: 3,
    question:
      "Which one of the following is asynchronous in message communication?",
    options: [
      "Blocking send",
      "Blocking receive",
      "Direct message",
      "Non-block receive",
    ],
    correctAnswer: 3,
    explanation:
      "Non-blocking receive is asynchronous because the receiver doesn't wait for the message to arrive - it can continue processing and check for messages later.",
  },
];

export default function Page({ params }) {
  const [question, setQuestion] = useState(questions[0]);
  const [hint, setHint] = useState(false);

  function handleNext() {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex < questions.length - 1) {
      setQuestion(questions[currentIndex + 1]);
    }
  }

  function handlePrevious() {
    const currentIndex = questions.findIndex((q) => q.id === question.id);
    if (currentIndex > 0) {
      setQuestion(questions[currentIndex - 1]);
    }
  }

  function handleHint() {
    setHint((hint) => !hint);
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
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option1"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>A. {question.options[0]}</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>B. {question.options[1]}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>C. {question.options[2]}</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="option2"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span>D.{question.options[3]}</span>
              </label>
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
