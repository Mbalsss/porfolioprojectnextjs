import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.introduction}>
          My name is Mbali Kgatlhane and I am a full stack developer.
        </p>
        <p className={styles.description}>
          Discover my latest projects and learn more about my work.
        </p>
        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Explore my development journey and past work.</p>
          </Link>
          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn more about my background and skills.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
