"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import SearchSection from "@/components/SearchSection";
import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { selectArticles } from "@/lib/redux";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(useSelector(selectArticles));
  return (
    <main className={styles.main}>
      <SearchSection
        setIsLoading={setIsLoading}
        setData={setData}
        isLoading={isLoading}
      />
      <div className={styles.cardsContainer}>
        {!isLoading &&
          data?.map((article: any) => (
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
