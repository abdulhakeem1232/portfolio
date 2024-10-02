import React from 'react'
import Image from 'next/image'

const HeadingSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Abdul Hakeem</h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl'>A Autodiatic MERN Stack Developer</p>
                </div>
                <div className='col-span-5'>
                    <div className='rounded-full bg-[#181818]  w-[300px] h-[300px] flex items-center justify-center'>
                        <Image src="/images/mypic.png" alt="" width={300}
                            height={300}
                            className="absolute transform -translate-y-[30px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadingSection

