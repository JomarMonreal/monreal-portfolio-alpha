"use client"

import Link from "next/link"
import styles from "./NavBar.module.css"
import { useState, FC, ReactNode } from "react"


type NavBarItem = {
    path: string,
    label: string,
    icon: ReactNode
}

const NavBar: FC<{ navBarItems: NavBarItem[] }> = ({navBarItems}) => {

  const [selectedIndex, setselectedIndex] = useState(0)


  return (
    <>
    <div className={`${styles.nav_bar}`}>
        <ul className={`${styles.nav_bar_buttons}`}>
            {
            navBarItems.map((navBarItem,index) =>{
                return(
                    <Link key={index} href={navBarItem.path}>
                        <li 
                        id={"nav_bar-button-" + index}
                        className={`${styles.nav_bar_button}`}
                        onClick={(e) => {
                            setselectedIndex(index)
                        }}
                        
                        >
                            <div id={"nav_bar-selected-" + index} className={selectedIndex === index? `${styles.nav_bar_selected}`: `${styles.nav_bar_selected} ${styles.no_display}`}></div>
                            <div title={navBarItem.label}>
                                {navBarItem.icon}
                            </div>
                        </li>
                    </Link>
                )
            })
            }
        </ul>
        <div className={`${styles.nav_bar_label}`}>
            <div className={`${styles.nav_bar_title}`}>JM</div>
            <div>@2024</div>
        </div>
    </div>
    </>
  )
}



export default NavBar