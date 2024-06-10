import { FaJava, FaPython, FaReact } from "react-icons/fa";
import styles from "./HomeCover.module.css";
import { SiFlutter, SiNextdotjs } from "react-icons/si";
import { iconSize } from "@/constants/iconConstants";

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
      <strong>Hey there!</strong> I&#39;m Jomar P. Monreal, a Filipino enthusiastic 21st century literate with high adaptability and appreciation. As a versatile developer, I bring extensive experience in a wide range of programming languages and technologies.
      <ul>
        <li>
          <FaReact size={iconSize}/> <div className="padded"> <strong>MERN Stack:</strong> Full-stack development with MongoDB, Express.js, React, and Node.js.</div>
        </li>
        <li>
          <SiNextdotjs size={iconSize}/> <div className="padded"> <strong>Next.js:</strong> High-performance and scalable web application development with Typescript.</div>
        </li>
        <li>
          <SiFlutter size={iconSize}/> <div className="padded"> <strong>Flutter:</strong> Cross-platform mobile applications for iOS and Android.</div>
        </li>
        <li>
          <FaJava size={iconSize}/> <div className="padded"> <strong>Java:</strong> Efficient and robust applications, especially for game development.</div>
        </li>
        <li>
          <FaPython size={iconSize}/> <div className="padded"> <strong>Python:</strong> Data analysis and statistics.</div>
        </li>
      </ul>
      <p id="project_section">With this comprehensive skill set, I am well-equipped to tackle diverse projects and deliver high-quality solutions that meet client needs and exceed expectations.</p>
    </div>


  </div>;
}
