'use client'
import Link from "next/link";
import { navData } from "../data/navData";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="font-semibold text-black text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full">Services</h1>

      <div className="grid grid-cols-4 gap-4">
                
        {
            navData.map((item, index) => {
                return (
                  <Link href={item.icon} key={index}>
                      <div className="p-6 max-h-max border border-black-600 rounded-2xl flex flex-col justify-center mt-8 hover:border hover:border-2 hover:border-black cursor-pointer">
                        <div className="flex gap-3">
                            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
                                <Image
                                    src={`${item.icon}-white.svg`}
                                    width={15}
                                    height={15}
                                    alt="Icon"
                                    className=""
                                />
                            </div>
                            <h3 className="font-bold text-xl">{item.name}</h3>
                        </div>
                        
                        <p className="mt-6 w-[220px] text-justify">
                            {item.detail}
                        </p>
                      </div>
                  </Link>
                    
                )
            })
        }

      </div>
    </div>
  );
}