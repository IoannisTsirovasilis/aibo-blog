import Link from "next/link";
import { articles } from "@/app/utils/articles";
import Image from "next/image";

export default function Navbar() {
  const categories = Array.from(
    new Set(articles.map((article) => article.category)),
  );

  return (
    <nav className="bg-gray-400 shadow p-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex gap-2 items-center">
          <Image
            src={"/aibo-icon.png"}
            width={48}
            height={48}
            alt="Aibo Icon"
          />{" "}
          Aibo
        </Link>
        <div className="flex space-x-4">
          {categories.map((category, index) => (
            <Link key={index} href={`/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
