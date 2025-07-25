function Button({ number }) {
  return (
    <button className="border rounded-sm w-8 text-sm bg-white">{number}</button>
  );
}

export default function ButtonGrid({ count = 100 }) {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {Array.from({ length: count }, (_, i) => i + 1).map((number) => (
        <Button key={number} number={number} />
      ))}
    </div>
  );
}
