import Image from "next/image";
import img from "/public/moe.png";
import Link from "next/link";

export default function Card({ title }) {
  const id = 1;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <Link href={`/exam/${id}`}>
        <Image
          src={img}
          alt={title}
          placeholder="blur"
          className="w-full h-48 object-cover"
        />

        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
