import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { selectSearchText, setArticles, setSearchText } from "@/lib/redux";
import getArticles from "@/apiFunctions/getArticles";
import Loader from "../Loader";

interface SearchSectionProps {
  setIsLoading: Function;
  setData: Function;
  isLoading: boolean;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  setIsLoading,
  isLoading,
  setData,
}) => {
  const dispatch = useDispatch();
  const searchData = useSelector(selectSearchText);
  const [searchQuery, setSearchQuery] = useState<string>(searchData);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getArticles(setIsLoading, searchQuery);
    setData(data);
    setIsSubmitted(true);
    dispatch(setArticles(data));
    dispatch(setSearchText(searchQuery));
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

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.searchboxContainer}>
            <BsSearch className={styles.searchIcon} onClick={handleSubmit} />
            <input
              type="text"
              className={styles.searchInput}
              value={searchQuery}
              placeholder="Search for articles"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        {!isSubmitted && (
          <div className={styles.lastLineContainer}>
            <span className={styles.peopleAlsoSearchedFor}>
              People also searched for:{" "}
              <span className={styles.name}>Web3, shadcn, NextJS</span>
            </span>
          </div>
        )}
        {isLoading && <Loader />}
      </motion.div>
    </main>
  );
};

export default SearchSection;
