"use client"

import Link from "next/link"
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
        <div className="nav-bar static invisible">
            <ul className="w-full pl-4 flex sm:flex-col flex-row">
                {
                navBarItems.map((navBarItem,index) =>{
                    return(
                        <Link key={index} href={navBarItem.path}>
                            <li 
                            id={"nav_bar-button-" + index}
                            className=""
                            onClick={(e) => {
                                setselectedIndex(index)
                            }}
                            
                            >
                                <div title={navBarItem.label} className="flex sm:flex-row flex-col justify-between items-center my-4 group">
                                    <div className="hover:scale-110">
                                        {navBarItem.icon}
                                    </div>
                                    <div id={"nav_bar-selected-" + index} className={selectedIndex === index? 
                                        `sm:static absolute top-0 sm:h-10 sm:w-1 h-1 w-10 bg-white`: 
                                        `sm:static absolute top-0 sm:group-hover:h-5 sm:group-hover:w-1 group-hover:h-1 group-hover:w-5 group-hover:rounded-full bg-gray-200`}>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })
                }
            </ul>
            <div className="flex flex-col items-center">
                <div className="text-4xl select-none">JM</div>
                <div>@2024</div>
            </div>
        </div>

        <nav className="nav-bar">
            <ul className="w-full pl-4 flex sm:flex-col flex-row">
                {
                navBarItems.map((navBarItem,index) =>{
                    return(
                        <Link key={index} href={navBarItem.path}>
                            <li 
                            id={"nav_bar-button-" + index}
                            className=""
                            onClick={(e) => {
                                setselectedIndex(index)
                            }}
                            
                            >
                                <div title={navBarItem.label} className="flex sm:flex-row flex-col justify-between items-center my-4 group">
                                    <div className="absolute right-24 w-0 h-10 group-hover:w-24 bg-lime-900 flex justify-center items-center p-0 group-hover:p-3 transition-all overflow-hidden whitespace-nowrap text-nowrap">
                                        {navBarItem.label}
                                    </div>
                                    <div className="hover:scale-110">
                                        {navBarItem.icon}
                                    </div>
                                    <div id={"nav_bar-selected-" + index} className={selectedIndex === index? 
                                        `sm:static absolute top-0 sm:h-10 sm:w-1 h-1 w-10 bg-white`: 
                                        `sm:static absolute top-0 sm:group-hover:h-5 sm:group-hover:w-1 group-hover:h-1 group-hover:w-5 group-hover:rounded-full bg-gray-200`}>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })
                }
            </ul>
            <div className="flex flex-col items-center">
                <div className="text-4xl select-none">JM</div>
                <div>@2024</div>
            </div>
        </nav>
    </>
  )
}



export default NavBar