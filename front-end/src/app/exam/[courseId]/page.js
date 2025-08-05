"use client";

import Question from "@/components/Question";
// import ButtonGrid from "@/components/Button";
// import { FlagIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

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
  return <Question questions={questions} />;
}
