import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { clearArticles, setArticles } from "@/lib/redux";
import getArticles from "@/apiFunctions/getArticles";
import Loader from "../Loader";
import { useRouter, usePathname } from "next/navigation";

interface SearchSectionProps {}

const SearchSection: React.FC<SearchSectionProps> = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchData =
    typeof window !== "undefined" ? localStorage.getItem("searchQuery") : "";
  const [searchQuery, setSearchQuery] = useState<string>(
    searchData ? searchData : ""
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (searchData !== "") {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    dispatch(clearArticles());
    const data = await getArticles(setIsLoading, searchQuery);
    dispatch(setArticles(data));
    localStorage.setItem("searchQuery", searchQuery);
    //dispatch(setSearchText(searchQuery));
    if (pathname.includes("/articles")) {
      router.replace("/");
    } else {
      setIsSubmitted(true);
    }
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
