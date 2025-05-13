import styles from '../../styles/About.module.css';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>

        <p className={styles.description}>
          Hello! I am Mbali Kgatlhane, a Full Stack Developer with a passion for creating innovative and efficient web applications. 
          With a solid foundation in both front-end and back-end development, I am dedicated to crafting solutions that solve real-world 
          problems.
        </p>

        <p className={styles.bio}>
          With fundamentals in both front-end and back-end technologies, I enjoy bringing ideas to life through clean code and efficient systems.
        </p>

        <section className={styles.experienceSection}>
          <h2 className={styles.subtitle}>Professional Experience</h2>

          <div className={styles.experienceItem}>
            <h3>Cloud Associate</h3>
            <p>Capaciti</p>
            <p><strong>February 2025 – Present</strong></p>

            <ul className={styles.experienceList}>
              <li>
                Currently participating in a structured cloud learnership program focused on modern cloud technologies and infrastructure.
              </li>
              <li>
                Enhancing knowledge of cloud computing principles, DevOps practices, and cloud-native application design.
              </li>
              <li>
                Gaining hands-on experience through training modules and collaborative projects.
              </li>
              <li>
                Developed a tablet-based Nursery Service System to improve patient intake and prioritization for clinics, utilizing Java and Spring Boot for backend services and React for the frontend interface.
              </li>
              <li>
                Participated in stakeholder meetings to gather requirements and ensured that solutions aligned with organizational objectives and user needs.
              </li>
              <li>
                Contributed to the full software development lifecycle, from design and development to testing and deployment.
              </li>
            </ul>
          </div>
        </section>

        <Link href="mailto:mbalikgatlhane34@gmail.com" className={styles.contactButton}>
          Contact Me
        </Link>
      </main>
    </div>
  );
}
