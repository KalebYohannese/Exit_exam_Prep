import Card from "@/components/Card";

export const metadata = {
  title: "Exam",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>
        Get Answers For The Ethiopian Exit Exam Questions With The Help Of AI.
      </h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Accounting" />
        <Card title="Animal-Science" />
        <Card title="Biodiversity" />
        <Card title="Biology" />
        <Card title="Civil Engineering" />
        <Card title="Computer Science" />
        <Card title="Construction Technology Management" />
        <Card title="Electrical Engineering" />
        <Card title="Economics" />
        <Card title="Geography" />
        <Card title="Information Systems" />
        <Card title="Management" />
      </div>
    </div>
  );
}
