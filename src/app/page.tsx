import { HomeCover } from "../components/HomeCover";
import { Bamboos } from "../components/Bamboos";
import styles from "./page.module.css";
import { ContactMeSection } from "../components/ContactMeSection";
import { ProjectsSection } from "../components/ProjectsSection";


export default function Home() {
  return (
      <div className={styles.home_page} style={{flex: 1}}>
        <HomeCover/>
        <ProjectsSection/>
        <ContactMeSection/>
      </div>
  );
}




