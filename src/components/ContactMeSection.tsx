"use client"

import { FaDiscord, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { iconSize } from "@/constants/iconConstants";
import styles from "./ContactMeSection.module.css";
import { useRef } from "react";

const icons = [
  { component: FaLinkedin, key: "linkedin" , url: "https://www.linkedin.com/in/jpmonreal/"},
  { component: FaGithubSquare, key: "github", url: "https://github.com/JomarMonreal" },
  { component: FaSquareFacebook, key: "facebook", url: "https://www.facebook.com/jom.monreal" },
  { component: BiLogoGmail, key: "gmail", url: "https://mail.google.com/mail/?view=cm&fs=1&to=jpmonreal2035@gmail.com&&bcc=jpmonreal2035@.com" },
  { component: FaDiscord, key: "discord", url: "https://discordapp.com/users/887158098291204189" },
];

export function ContactMeSection() {
  
  const textarea = useRef<HTMLTextAreaElement>(null)

  return (
    <form>
      <h2 id="contact_section" style={{ marginBottom: "1rem" }}>Contact Me</h2>
      <p>
        I&#39;m open to new opportunities and always excited to connect for projects, collaborations, or simply a friendly chat. Don&#39;t hesitate to get in touch!
      </p>

      <h4 style={{marginTop: "1rem"}}>Message:</h4>
      <div className="flexed padded">
        <div className={styles.contact_me_section_profile_background}>
          <img
            src="/images/profilePhoto.jfif"
            className={styles.contact_me_section_profile}
          />
        </div>
        <textarea ref={textarea}
          placeholder="Send me a message..."
          className={styles.contact_me_section_input}
        ></textarea>
      </div>
      <div
        className="flexed"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1ch 0",
        }}
      >
        <div className="flexed">
          {icons.map((icon) => {
            const IconComponent = icon.component;
            return (
              <div key={icon.key} className="icon_button">
                <a href={icon.url}>
                  <IconComponent size={iconSize} cursor={"pointer"} color="var(--green-color)"/>
                </a>
              </div>
            );
          })}
        </div>

        <button type="submit" onClick={(e)=>{
          e.preventDefault()
          window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=jpmonreal2035@gmail.com&&su=Portfolio%20Message&&body=${encodeURIComponent(textarea.current?.value??"Empty%message" as string)}&&bcc=jpmonreal2035@.com`
        }}>Submit</button>
      </div>
    </form>
  );
}
