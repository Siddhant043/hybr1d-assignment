"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { format } from "date-fns";

interface CommentProps {
  comment: any;
}

const Comment = ({ comment }: CommentProps) => {
  const [viewReplies, setViewReplies] = useState<boolean>(true);
  const formattedDate = format(comment.created_at, "dd/MM/yyyy");
  const handleShowReplies = () => {
    setViewReplies((prev) => !prev);
  };
  return (
    <div className={styles.main}>
      <div className={styles.topRow}>
        <div className={styles.authorContainer}>
          <div className={styles.dot} />
          <p className={styles.author}>{comment.author}</p>
        </div>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <div
        className={styles.commentText}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
      {comment.children.length > 0 && viewReplies ? (
        <div className={styles.replyTextContainer}>
          <div className={styles.line} />
          <p
            className={styles.showHideText}
            onClick={handleShowReplies}
          >{`View Replies (${comment.children.length})`}</p>
        </div>
      ) : !viewReplies ? (
        <div className={styles.replyTextContainer}>
          <div className={styles.line} />
          <p
            className={styles.showHideText}
            onClick={handleShowReplies}
          >{`Hide Replies (${comment.children.length})`}</p>
        </div>
      ) : (
        <></>
      )}
      {!viewReplies &&
        comment.children.map((reply: any) => (
          <Comment key={reply.story_id} comment={reply} />
        ))}
    </div>
  );
};

export default Comment;
