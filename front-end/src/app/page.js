import Card from "./_components/Card";

export default function Home() {
  return (
    <div>
      <h1>
        Get Answers For The Ethiopian Exit Exam Questions With The Help Of AI.
      </h1>
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
