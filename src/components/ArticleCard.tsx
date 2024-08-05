import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard(props: any) {
  const { title, excerpt, imageUrl, date, category, articleId } = props;
  return (
    <Link
      href={`/${category}/${articleId}`}
      className="border text-gray-700 p-4 rounded shadow hover:bg-gray-100 bg-gray-300 transition duration-200"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <Image src={imageUrl} alt={title} width={800} height={400} />
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <p>{excerpt}</p>
    </Link>
  );
}
