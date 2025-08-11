"use client";

import Question from "./Question";

export default function Year({ course, questions }) {
  return (
    <>
      <h1 className="text-6xl font-bold text-center">
        {course[0].title} Exit exam
      </h1>
      <Question questions={questions} />;
    </>
  );
}
