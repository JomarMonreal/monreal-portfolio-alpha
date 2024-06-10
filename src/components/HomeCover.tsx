import styles from "./HomeCover.module.css";

export function HomeCover() {
  return <div className={styles.home_cover}>
    <div>
      <h1 className={styles.home_cover_title}>Jomar Monreal</h1>
      <div className={styles.home_cover_tags}>
        <span className={`${styles.home_cover_tag} ${styles.adaptive_tag}`}>Adaptive</span> 
        <span className={`${styles.home_cover_tag} ${styles.responsive_tag}`}>Responsive</span> 
        <span className={ `${styles.home_cover_tag} ${styles.flexible_tag}`}>Flexible</span> 
      </div>
    </div>


    <div className={styles.home_cover_description}>
      Hey there! I'm Jomar P. Monreal, a Filipino enthusiastic 21st century literate with high adaptability and
      appreciation. As a versatile developer, I bring extensive experience in a wide range of programming languages and technologies.
      <ul>
        <li>
          I specialize in building dynamic web applications using <strong>React</strong>, creating responsive and interactive user experiences.
          Proficient in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), I develop comprehensive full-stack solutions.
        </li>
        <li>I have developed this website using <strong>Next.js</strong>, showcasing my ability to create high-performance and scalable web applications.</li>
        <li>My expertise in <strong>Flutter</strong> empowers me to develop cross-platform mobile applications that perform seamlessly on both iOS and Android devices.</li>
        <li>My strong grasp of <strong>Java</strong> enables me to create efficient and robust applications, especially in developing games.</li>
        <li>My proficiency in <strong>Python</strong> allows me to handle data analysis and statistics with ease.</li>
      </ul>
      <p>With this comprehensive skill set, I am well-equipped to tackle diverse projects and deliver high-quality solutions that meet client needs and exceed expectations.</p>
    </div>


  </div>;
}
