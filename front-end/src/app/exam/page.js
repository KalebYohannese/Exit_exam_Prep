import Card from "@/components/Card";
import { getCourses } from "@/lib/data-service";

export const metadata = {
  title: "Exam",
};

const courses = await getCourses();

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">
        Get Answers For The Ethiopian Exit Exam Questions With The Help Of AI.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
