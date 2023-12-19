"use client";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import getArticles from "@/apiFunctions/getArticles";

const SearchSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isLastLineVisible, setIsLastLineVisible] = useState<boolean>(true);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLastLineVisible(false);
    getArticles();
  };
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.headingContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heading}>Hacker Search</h1>
        <h3 className={styles.subHeading}>
          Get Hacker News articles instantly
        </h3>

        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={styles.searchboxContainer}>
            <BsSearch className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              value={searchText}
              placeholder="Search for articles"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </form>
        {isLastLineVisible && (
          <div className={styles.lastLineContainer}>
            <span className={styles.peopleAlsoSearchedFor}>
              People also searched for:{" "}
              <span className={styles.name}>Web3, shadcn, NextJS</span>
            </span>
          </div>
        )}
      </motion.div>
    </main>
  );
};

export default SearchSection;
