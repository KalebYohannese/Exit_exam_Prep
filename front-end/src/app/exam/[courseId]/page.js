import Year from "@/components/Year";
import { getAllQuestions, getQuestions, getCourse } from "@/lib/data-service";

// export async function generateMetadata({ params }) {
//   const { name } = await getExam(params.courseId);
//   return {
//     title: `${name} Exam`,
//   };
// }

export default async function Page({ params }) {
  const { courseId } = await params;
  const year = 2015;

  // const data = await getQuestions(courseId, year);
  const course = await getCourse(courseId);

  return (
    <div className="w-full">
      <Year course={course} />
    </div>
  );
}
