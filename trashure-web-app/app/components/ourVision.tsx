import Image from "next/image"

export default function OurVision(){
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="flex items-center justify-center gap-4">
                <button>
                    <div className="rounded-full flex items-center justify-center border border-black-600 bg-white p-4">
                        <Image
                            src={'/left-nav.png'}
                            width={12}
                            height={12}
                            alt="Icon"
                            style={{color: 'white'}}
                        />
                    </div>
                </button>
                

                <h1 className="mt-4 font-semibold text-black text-2xl border border-black-600 py-2 px-6 mb-4 rounded-full">Our Vision</h1>

                <button>
                    <div className="rounded-full flex items-center justify-center border border-black-600 bg-white p-4">
                        <Image
                            src={'/right-nav.png'}
                            width={12}
                            height={12}
                            alt="Icon"
                        />
                    </div>
                </button>

            </div>

            <div className="flex items-center justify-center gap-11 mt-10">
                <Image
                    src={'/vision-img.jpg'}
                    width={490}
                    height={365}
                    alt="Vision Image"
                />

                <div className="mt-8 flex flex-col justify-center w-[490px]">
                    <h2 className="font-semibold text-[40px]">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <p className="mt-4 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                    </p>
                </div>
            </div>

        </div>
    )
}