import styles from '../../styles/About.module.css';
import Link from 'next/link';

export default function Education() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Education</h1>

        <p className={styles.description}>
          Hello! I am Mbali Kgatlhane, a Full Stack Developer with a passion for creating innovative and efficient web applications. 
          With a solid foundation in both front-end and back-end development, I am dedicated to crafting solutions that solve real-world 
          problems.
        </p>

        <p className={styles.bio}>
          With fundamentals in both front-end and back-end technologies, I enjoy bringing ideas to life through clean code and efficient systems.
        </p>

        <section className={styles.educationSection}>
          <h2 className={styles.subtitle}>Academic Background</h2>

          <div className={styles.educationItem}>
            <h3>Diploma in Information and Communication Technology: Application Development</h3>
            <p>Cape Peninsula University of Technology</p>
            <p>2024</p>
          </div>

          <div className={styles.educationItem}>
            <h3>Higher Certificate in Information Technology</h3>
            <p>Richfield Graduate Institute of Technology</p>
            <p>2021</p>
          </div>

          <div className={styles.educationItem}>
            <h3>National Senior Certificate</h3>
            <p>Allen Glen High School</p>
            <p>2020</p>
          </div>
        </section>

        <Link href="mailto:mbalikgatlhane34@gmail.com" className={styles.contactButton}>
          Contact Me
        </Link>
      </main>
    </div>
  );
}
