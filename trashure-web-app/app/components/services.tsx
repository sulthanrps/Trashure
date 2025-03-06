'use client'

import { navData } from "../misc/navData";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="font-semibold text-black text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full">Services</h1>

      <div className="grid grid-cols-4 gap-4">
                
        {
            navData.map((item, index) => {
                return (
                    <div key={index} className="p-6 border border-black-600 rounded-2xl flex flex-col justify-center mt-8">
                        <div className="flex gap-3">
                            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
                                <Image
                                    src={`${item.icon}-white.png`}
                                    width={15}
                                    height={15}
                                    alt="Icon"
                                    className=""
                                />
                            </div>
                            <h3 className="font-bold text-xl">{item.name}</h3>
                        </div>
                        
                        <p className="mt-6 w-[220px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet...
                        </p>
                    </div>
                )
            })
        }

      </div>
    </div>
  );
}