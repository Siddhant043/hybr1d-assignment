"use client";
import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import { selectArticles } from "@/lib/redux";
import { useSelector } from "react-redux";

const selectData = [
  { label: "Nigeria", value: "NG" },
  { label: "Japan", value: "JP" },
  { label: "Korea", value: "KO" },
  { label: "Kenya", value: "KE" },
  { label: "United Kingdom", value: "UK" },
  { label: "Ghana", value: "GH" },
  { label: "Uganda", value: "UG" },
];

export default function Home() {
  const data = useSelector(selectArticles);
  const sortedByDate = [...data].sort(
    (a: { created_at_i: number }, b: { created_at_i: number }) =>
      b.created_at_i - a.created_at_i
  );

  return (
    <main className={styles.main}>
      <div className={styles.cardsContainer}>
        {sortedByDate.length > 0 &&
          sortedByDate.map((article: any) => (
            <ArticleCard
              key={article.created_at_i}
              title={article.title}
              id={article.story_id}
              numComments={article.num_comments}
              createdAt={article.created_at}
              author={article.author}
              points={article.points}
            />
          ))}
      </div>
    </main>
  );
}
