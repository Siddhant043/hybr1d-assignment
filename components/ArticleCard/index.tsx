"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { IoStar } from "react-icons/io5";
import { BiSolidComment } from "react-icons/bi";
import PrimaryButton from "../PrimaryButton";
import formatDate from "@/utils/formatDate";

interface ArticleCardProps {
  title: string;
  id: string;
  numComments: number;
  createdAt: Date;
  author: string;
  points: number;
}

const ArticleCard = ({
  title,
  id,
  numComments,
  createdAt,
  author,
  points,
}: ArticleCardProps) => {
  const formattedDate = formatDate(createdAt);
  const router = useRouter();
  const handleRoute = () => {
    router.push(`/articles/${id}`);
  };
  return (
    <motion.div
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -100 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.cardRow}>
        <span className={styles.name}>By: {author}</span>
        <div className={styles.iconAndTextContainer}>
          <IoStar className={styles.pointsIcon} />
          <span className={styles.points}>{points}</span>
        </div>
      </div>
      <div className={styles.cardRow}>
        <span className={styles.date}>{formattedDate}</span>
        <div className={styles.iconAndTextContainer}>
          <BiSolidComment className={styles.commentsIcon} />
          <span className={styles.points}>{points}</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton text="View More" handleClick={handleRoute} />
      </div>
    </motion.div>
  );
};

export default ArticleCard;
