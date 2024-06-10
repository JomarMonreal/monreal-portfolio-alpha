import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {iconSize, iconColor} from "../constants/iconConstants.js"

import { FaHome, FaInfo } from 'react-icons/fa'; 
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { DiVisualstudio } from "react-icons/di";
import { Bamboos } from "@/components/Bamboos";


const navBarItems = [
  { path: '/', label: 'Home', icon: <FaHome size={iconSize} color={iconColor} cursor={"pointer"}/> },
  { path: '#project_section', label: 'Projects', icon: <AiFillProject size={iconSize} color={iconColor} cursor={"pointer"}/> },
  { path: '#contact_section', label: 'Contact Me', icon: <IoIosContact size={iconSize} color={iconColor} cursor={"pointer"}/> },
];


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jomar Monreal | Web & App Developer",
  description: "A Portfolio website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Bamboos/>
        <div className={`flexed`} style={{width: "100%"}}>
          {children}
          <NavBar navBarItems={navBarItems}/>
        </div>
      </body>
    </html>
  );
}


