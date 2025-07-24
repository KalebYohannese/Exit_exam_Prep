import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/exam">Exam</Link>
      <Link href="/plan">Plan</Link>
      <Link href="/notes">Notes</Link>
    </nav>
  );
}
