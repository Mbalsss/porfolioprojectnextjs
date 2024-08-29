import styles from '../../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.description}>
          Here are some of the projects I have worked on.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Project 1 &rarr;</h2>
            <p>I have worked on a full-stack web application that connects students with qualified tutors for personalized learning,</p>
          </div>
          <div className={styles.card}>
            <h2>Project 2 &rarr;</h2>
            <p>As a Full Stack Developer, I created a recruitment web application that streamlines the hiring process by enabling employers to post job listings, candidates to submit applications with resumes, and both parties to communicate effectively while scheduling interviews, all secured by 
              a robust authentication system.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
