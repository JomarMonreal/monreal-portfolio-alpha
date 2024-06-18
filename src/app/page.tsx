"use client"

import { HomeCover } from "../components/HomeCover";
import { ContactMeSection } from "../components/ContactMeSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import Loading from "./loading";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Project, convertToProjectsArray } from "@/types/types";
import projectsJSON from "../../public/json/projects_2.json"
import skillsJSON from "../../public/json/skills.json"


export default function Home() {
  const [projects, setProjects] = useState<Project[]>(convertToProjectsArray(projectsJSON))
  const [skills, setSkills] = useState(skillsJSON)
  const [token, setToken] = useState("")

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token")!)
      return
    }
    // get token first
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/token/`,
      {
        "username": process.env.NEXT_PUBLIC_USERNAME,
        "password": process.env.NEXT_PUBLIC_PASSWORD
      }
    ).then(response =>{
      setToken(response.data.access)
      sessionStorage.setItem("token",response.data.access)
      console.log(response.data.access)
    })
    .catch(err=>console.log(err))

    
  }, []);

  useEffect(() => {
    if(token != "" || token){
      //then get projects
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(
        response => {
          console.log(response.data)
          setProjects(response.data)
  
          //then get skills
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/skills/`,
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          )
          .then(
            response => {
              console.log(response.data)
              setSkills(response.data)
              setIsLoading(false)
            }
          ).catch(
            err => console.log(err)
          )
        }
      ).catch(
        err => console.log(err)
      )
    }
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.article
      className="sm:m-28 m-10 sm:w-2/4 w-3/4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
    >
      <HomeCover />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects}/>
      <ContactMeSection />
    </motion.article>
  );
}

