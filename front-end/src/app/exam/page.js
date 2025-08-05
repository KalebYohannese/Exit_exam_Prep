import Card from "@/components/Card";

export const metadata = {
  title: "Exam",
};

const courses = [
  { id: 1, title: "Accounting" },
  { id: 2, title: "Animal Science" },
  { id: 3, title: "Biodiversity" },
  { id: 4, title: "Biology" },
  { id: 5, title: "Civil Engineering" },
  { id: 6, title: "Computer Science" },
  { id: 7, title: "Construction Technology Management" },
  { id: 8, title: "Electrical Engineering" },
  { id: 9, title: "Economics" },
  { id: 10, title: "Geography" },
  { id: 11, title: "Information Systems" },
  { id: 12, title: "Management" },
];

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
