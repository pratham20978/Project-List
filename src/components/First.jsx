import React from 'react'

const First = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 gap-8 md:gap-16">
            {/* Left Section: Heading and Paragraph */}
            <div className="text-left max-w-lg">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Not Your Average Realtor</h1>
                <p className="text-gray-700 w-96 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque harum nemo laboriosam voluptatem dicta. Dolorem nulla debitis eos quas.
                </p>
            </div>

            {/* Right Section: Circular Images */}
            <div className="relative w-64 h-64">
                {/* Top Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden shadow-md">
                    <img
                        src="/Assets/Images/one.svg"
                        alt="Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Left Circle */}
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full overflow-hidden shadow-md">
                    <img
                        src="/Assets/Images/two.svg"
                        alt="Image 2"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Right Circle */}
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full overflow-hidden shadow-md">
                    <img
                        src="/Assets/Images/three.svg"
                        alt="Image 3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default First
