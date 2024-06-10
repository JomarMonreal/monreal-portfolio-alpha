import { FaDiscord, FaGithub, FaGithubSquare, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { iconSize } from "@/constants/iconConstants";
import styles from "./ContactMeSection.module.css"

export function ContactMeSection() {
  return <div>
    <h2>Contact Me</h2>
    <div className="flexed">
      <img src="/images/profilePhoto.jfif" className={styles.contact_me_section_profile} />
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
