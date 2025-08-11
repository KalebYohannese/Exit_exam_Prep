"use client";

import Question from "./Question";
import { getQuestions } from "@/lib/data-service";
import { useEffect, useState } from "react";

export default function Year({ course }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(0);

  useEffect(() => {
    if (year > 0) {
      async function loadQuestions() {
        setLoading(true);
        const data = await getQuestions(course[0].id, year);
        setQuestions(data);
        setLoading(false);
      }
      loadQuestions();
    }
  }, [course, year]);

  return (
    <div>
      {year === 0 ? (
        <div className="w-full space-x-4 text-center">
          <button onClick={() => setYear(2015)}>2015</button>
          <button onClick={() => setYear(2016)}>2016</button>
        </div>
      ) : (
        <>
          <h1 className="text-6xl font-bold text-center">
            {course[0].title} Exit exam
          </h1>
          {loading ? <p>Loading...</p> : <Question questions={questions} />}
        </>
      )}
    </div>
  );
}
