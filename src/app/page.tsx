import ArticleCard from "../components/ArticleCard";
import { articles } from "./utils/articles";

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.slice(0, 6).map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            date={article.date}
            category={article.category}
            articleId={article.id}
          />
        ))}
      </div>
    </>
  );
}
