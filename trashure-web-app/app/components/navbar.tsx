'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { navData } from "../misc/navData";

interface INavbarProps {
    loggedIn: boolean
}

export default function Navbar({loggedIn} : INavbarProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    return (
    <nav className="flex items-center justify-between p-12 text-white">
        <Link href={"/"}>
            <Image 
                src={"/logo.png"}
                alt="Logo"
                width={158}
                height={35}
            />
        </Link>
        


        <ul className="flex space-x-4 text-black">
            {navData.map((item, index) => {
                return (
                    <Link href={item.icon} key={index}>
                        <li className="bg-[#F0F0F0] rounded-full px-5 py-1 pl-1 text-xs font-semibold inline-flex justify-start items-center gap-2 hover:bg-[#262832] hover:text-white">
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                <Image
                                    src={`${item.icon}.png`}
                                    width={15}
                                    height={15}
                                    alt="Icon"
                                />
                            </div>
                            {item.name}
                        </li>
                    </Link>
                    
                )
            }
            )}
        </ul>
        
        {
            !loggedIn && (
                <div className="flex space-x-2">
                    <Link href="/login">
                        <button className="px-7 py-2 text-white bg-[#262832] rounded-lg" onClick={() => setIsLoggedIn(true)}>Sign In</button>
                    </Link> 
                    
                    <Link href="/register">
                        <button className="px-7 py-2 text-black rounded-lg border border-black" onClick={() => setIsLoggedIn(true)}>Sign Up</button>
                    </Link>
                    
                </div>
            )
        }

        {
            loggedIn && (
                <a className="flex items-center gap-2 border border-gray rounded-md p-2" href="#" onClick={() => setIsLoggedIn(false)}>
                    <div className="w-6  h-6 bg-gray-200 rounded-full"></div>
                    <p className="text-sm text-black">Sulthan Rafi</p>
                </a>
            )
        }
        
         
        </nav>
    )
}