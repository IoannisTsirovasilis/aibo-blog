import ArticleContent from "../../../components/ArticleContent";
import { articles } from "@/app/utils/articles";

interface ArticlePageProps {
  params: {
    article: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((article) => article.id === params.article);
  return (
    <div className="container mx-auto p-4">
      <ArticleContent article={article} />
    </div>
  );
}
