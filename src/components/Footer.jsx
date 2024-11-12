import React from 'react'
import NewsLatter from './NewsLatter'

const Footer = () => {
    return (
        <div>
            {/* Main Banner Section */}
            <div className="picture relative">
                <img src="/Assets/Images/Rectangle.svg" alt="" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
                    <div className="font-bold text-lg md:text-2xl text-white md:w-[70vw] mb-4">
                        Learn more about our listing process, as well as our additional staging and design work.
                    </div>
                    <button className="text-blue-400 bg-white px-10 md:px-20 rounded-lg p-3">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="Newslatter bg-blue-400 p-5 md:p-10 flex flex-wrap md:justify-between items-center md:px-20">
                <div className="list mb-4 md:mb-0">
                    <ul className="flex flex-wrap justify-center md:gap-10 gap-5">
                        <li className="cursor-pointer text-white font-bold">Home</li>
                        <li className="cursor-pointer text-white font-bold">About</li>
                        <li className="cursor-pointer text-white font-bold">About Project</li>
                        <li className="cursor-pointer text-white font-bold">Contact</li>
                    </ul>
                </div>
                <div className="email flex flex-col md:flex-row gap-4 md:gap-10 items-center h-auto md:h-[5vh]">
                    <span className="font-bold text-center md:text-left text-lg md:text-xl text-white">
                        Subscribe Us
                    </span>
                    <NewsLatter />
                </div>
            </div>

            {/* Footer Section */}
            <div className="foot bg-slate-800 flex flex-wrap justify-between items-center p-5 md:p-10 px-5 md:px-20 gap-5">
                <div className="words text-white font-bold text-center md:text-left">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="name flex justify-center md:justify-start items-center gap-1 cursor-pointer">
                    <div className="logo">
                        <img className="w-7" src="Assets/Icons/home2.svg" alt="" />
                    </div>
                    <div className="name mt-1">
                        <span className="mx-1 text-lg md:text-xl font-bold text-white">Real</span>
                        <span className="mx-1 text-lg md:text-xl text-white">Trust</span>
                    </div>
                </div>
                <div className="links">
                    <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <li>
                            <div className="w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto">
                                <img className="w-5" src="/Assets/Icons/Group-1.svg" alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto">
                                <img className="w-5" src="/Assets/Icons/Group.svg" alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto">
                                <img className="w-5" src="/Assets/Icons/Frame.svg" alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto">
                                <img className="w-5" src="/Assets/Icons/Linkedin.svg" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer
