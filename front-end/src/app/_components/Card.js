import Image from "next/image";
import img from "/public/moe.png";

export default function Card({ title }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Try using Image */}
      <Image src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
      </div>
    </div>
  );
}
