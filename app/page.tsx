"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchSection />
    </main>
  );
}
