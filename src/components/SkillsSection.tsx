"use client"

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { skillsIconSize } from "@/constants/iconConstants";
import FloatingTitle from "./FloatingTitle";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Skill } from "@/types/types";

interface SkillsSectionProps{
  skills: Skill[]
}

export const SkillsSection: FC<SkillsSectionProps> = (props) => {

  const classifications = ["Frontend Development","Backend Development","Database Management","Languages"]

  return (
    <section className="my-3">
      <FloatingTitle text="Skills" tag="h3" className="text-6xl" />
      
      <p>
        With this comprehensive skill set, I am well-equipped to tackle diverse projects and deliver high-quality solutions that meet client needs and exceed expectations.
      </p>

      {
        classifications.map((classification, index)=>{
          const classifiedSkills = props.skills.filter(skill => skill.classification === classification)
          return (
            <section key={index}>
              <FloatingTitle text={classification} tag="h2" className="text-4xl" />
              <ul className="skills">
                {classifiedSkills.map((skill, index) => (
                  <li key={index} className="flex flex-col items-center min-w-20 relative ">
                    <div className="animate-float hover:scale-110">
                      {DynamicIcon(skill.icon)}
                    </div>
                    <div className="p-4 text-center">
                      <strong>{skill.name}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })
      }

    </section>
  );
}


const DynamicIcon = (name: string) => {
  let IconComponent = FaIcons[name as keyof typeof FaIcons];

  if (!IconComponent) { // Return a default one
    IconComponent = SiIcons[name as keyof typeof SiIcons]
    if(!IconComponent){
      IconComponent = FaIcons["FaCheckCircle"]
    }
  }

  return <IconComponent size={skillsIconSize}/>;
};