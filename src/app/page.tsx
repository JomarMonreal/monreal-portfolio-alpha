"use client"

import { HomeCover } from "../components/HomeCover";
import { ContactMeSection } from "../components/ContactMeSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import Loading from "./loading";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed (2000ms = 2 seconds)

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="sm:m-28 m-10 sm:w-2/4 w-3/4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
    >
      <HomeCover />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />
    </motion.div>
  );
}

