"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ArticleCard from "../../components/ArticleCard";
import { articles } from "../utils/articles";

interface CategoryPageWithPaginationProps {
  params: {
    category: string;
    page: string;
  };
}

export default function CategoryPageWithPagination({
  params,
}: CategoryPageWithPaginationProps) {
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const categoryArticles = articles.filter(
    (article) => article.category === params.category,
  );
  const router = useRouter();
  const pageSize = 3;
  const paginatedArticles = categoryArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`/${params.category}/?page=${currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(articles.length / pageSize)) {
      router.push(`/${params.category}/?page=${currentPage + 1}`);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            date={article.date}
            category={params.category}
            articleId={article.id}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(articles.length / pageSize)}
          className="px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
