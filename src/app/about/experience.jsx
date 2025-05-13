import styles from '../../styles/About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hello! I am Mbali Kgatlhane, a Full Stack Developer with a passion for creating innovative and efficient web applications. 
          With a solid foundation in both front-end and back-end development, I am dedicated to crafting solutions that solve real world 
          problems.
        </p>
        <p className={styles.bio}>
          With fundementals in both front-end and back-end technologies, I enjoy bringing ideas to life through clean code and efficient systems.
        </p>
        <Link href="mailto:mbalikgatlhane34@gmail.com" className={styles.contactButton}>
          Contact Me
        </Link>
      </main>
    </div>
  );
}
