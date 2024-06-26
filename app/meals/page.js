import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import styles from "./page.module.css";

import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe to cook it yourself. Is is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
