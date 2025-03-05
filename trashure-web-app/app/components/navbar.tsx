'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export const listItems = [
    {
        name: 'EduGreen',
        icon: '/edu-green'
    },
    {
        name: 'Waste Connect',
        icon: '/waste-connect'
    },
    {
        name: 'Trashure Worth',
        icon: '/trashure-worth'
    },
    {
        name: 'ReMarket',
        icon: '/re-market'
    }
];

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    return (
    <nav className="flex items-center justify-between p-12 text-white">
        <Image 
        src={"/logo.png"}
        alt="Logo"
        width={158}
        height={35}
        />


        <ul className="flex space-x-4 text-black">
            {listItems.map((item, index) => {
                return (
                    <a href="#" key={index}>
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
                    </a>
                    
                )
            }
            )}
        </ul>
        
        {
            !isLoggedIn && (
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
            isLoggedIn && (
                <a className="flex items-center gap-2 border border-gray rounded-md p-2" href="#" onClick={() => setIsLoggedIn(false)}>
                    <div className="w-6  h-6 bg-gray-200 rounded-full"></div>
                    <p className="text-sm text-black">Sulthan Rafi</p>
                </a>
            )
        }
        
         
        </nav>
    )
}