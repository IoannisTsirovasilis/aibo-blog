import Image from "next/image";
import React from "react";

export default function ArticleContent({ article }: any) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{article.date}</p>
      <p className="text-sm text-gray-600 mb-4">{article.category}</p>
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={800}
        height={400}
        className="mb-4 rounded-lg shadow-lg"
      />
      <p className="text-lg leading-7">{article.content}</p>
    </div>
  );
}
