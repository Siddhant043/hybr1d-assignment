"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import getArticleDetails from "@/apiFunctions/getArticleDetails";
import Loader from "@/components/Loader";
import { IoStar } from "react-icons/io5";
import { format } from "date-fns";
import PrimaryButton from "@/components/PrimaryButton";
import Comment from "@/components/Comment";

const ArticleDetails = ({ params }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [articleDetails, setArticleDetails] = useState<any>(null);

  const updateArticleDetails = async () => {
    const data = await getArticleDetails(params.articleId, setIsLoading);
    setArticleDetails({
      ...data,
      created_at: format(data.created_at, "dd/MM/yyyy"),
    });
  };
  useEffect(() => {
    updateArticleDetails();
  }, []);

  const handleRoute = () => {
    window.open(articleDetails?.url, "_blank");
  };

  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      {articleDetails && (
        <main className={styles.innerContainer}>
          <h1 className={styles.title}>{articleDetails?.title}</h1>
          <div className={styles.row}>
            <span className={styles.text}>
              By: <span className={styles.text2}>{articleDetails?.author}</span>
            </span>
            <span className={styles.text}>
              Posted on:
              <span className={styles.text2}>{articleDetails?.created_at}</span>
            </span>
          </div>
          <div className={styles.row}>
            <div className={styles.iconAndTextContainer}>
              <IoStar className={styles.pointsIcon} />
              <span className={styles.points}>{articleDetails?.points}</span>
            </div>
            <PrimaryButton text="Visit Post" handleClick={handleRoute} />
          </div>
          <span
            className={styles.commentsTitle}
          >{`Comments (${articleDetails.children.length})`}</span>
          <div className={styles.commentsContainer}>
            {articleDetails.children.map((comment: any) => (
              <Comment key={comment.story_id} comment={comment} />
            ))}
          </div>
        </main>
      )}
    </main>
  );
};

export default ArticleDetails;
