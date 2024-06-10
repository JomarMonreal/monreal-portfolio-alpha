import { HomeCover } from "../components/HomeCover";
import { Bamboos } from "../components/Bamboos";
import styles from "./page.module.css";
import { iconColor } from "@/constants/iconConstants";
import { ContactMeSection } from "../components/ContactMeSection";
import { ProjectsSection } from "../components/ProjectsSection";


export default function Home() {
  return (
    <main>
      <Bamboos/>
      <div className={styles.home_page}>
        <HomeCover/>
        <ProjectsSection/>
        <ContactMeSection/>
      </div>
    </main>
  );
}




