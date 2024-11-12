import React from 'react'

const WhyChoose = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-blue-600 text-4xl font-extrabold mb-10">Why Choose Us</h1>
            <div className="cards">
                <ul className='flex'>
                    <li className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
                        {/* Icon Container */}
                        <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
                            <img className="w-8" src="/Assets/Icons/home.svg" alt="Icon" />
                        </div>

                        {/* Heading */}
                        <div className="heading text-center">
                            <h2 className="text-blue-600 text-2xl font-bold">Potential ROI</h2>
                        </div>

                        {/* Paragraph */}
                        <div className="para">
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam alias aut atque architecto tenetur neque ducimus libero doloremque veniam!
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
                        {/* Icon Container */}
                        <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
                            <img className="w-8" src="/Assets/Icons/paint.svg" alt="Icon" />
                        </div>

                        {/* Heading */}
                        <div className="heading text-center">
                            <h2 className="text-blue-600 text-2xl font-bold">Design</h2>
                        </div>

                        {/* Paragraph */}
                        <div className="para">
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam alias aut atque architecto tenetur neque ducimus libero doloremque veniam!
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto">
                        {/* Icon Container */}
                        <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
                            <img className="w-8" src="/Assets/Icons/doller.svg" alt="Icon" />
                        </div>

                        {/* Heading */}
                        <div className="heading text-center">
                            <h2 className="text-blue-600 text-2xl font-bold">Marketing</h2>
                        </div>

                        {/* Paragraph */}
                        <div className="para">
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam alias aut atque architecto tenetur neque ducimus libero doloremque veniam!
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default WhyChoose
