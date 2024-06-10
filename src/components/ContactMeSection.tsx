import { FaDiscord, FaGithub, FaGithubSquare, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { iconSize } from "@/constants/iconConstants";
import styles from "./ContactMeSection.module.css"

export function ContactMeSection() {
  return <div>
    <h2 style={{marginBottom: "1rem"}}>Contact Me</h2>
    <p>I'm open to new opportunities and always excited to connect for projects, collaborations, or simply a friendly chat. Don't hesitate to get in touch!</p>
    <div className="flexed padded">
      <div className={styles.contact_me_section_profile_background}>
        <img src="/images/profilePhoto.jfif" className={styles.contact_me_section_profile} />
      </div>
      <textarea
        placeholder="Send me a message..."
        className={styles.contact_me_section_textarea}>
      </textarea>
    </div>
    <div className="flexed" style={{ justifyContent: "space-between", alignItems: "center", padding: "1ch 0" }}>
      <div>
        <FaLinkedin size={iconSize} cursor={"pointer"}/>
        <FaGithubSquare size={iconSize} cursor={"pointer"} />
        <FaInstagramSquare size={iconSize} cursor={"pointer"} />
        <FaSquareFacebook size={iconSize} cursor={"pointer"} />
        <FaDiscord size={iconSize} cursor={"pointer"} />
        <BiLogoGmail size={iconSize} cursor={"pointer"} />
      </div>
      <button>Submit</button>
    </div>
  </div>;
}
