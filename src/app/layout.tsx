import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {iconSize, iconColor} from "../constants/iconConstants.js"

import { FaHome, FaInfo } from 'react-icons/fa'; 
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar navBarItems={navBarItems}/>
      </body>
    </html>
  );
}


