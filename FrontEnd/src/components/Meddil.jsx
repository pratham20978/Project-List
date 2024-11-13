import React from 'react'

const Meddil = () => {
    return (
        <div className="bg-gradient-to-b from-blue-100 via-white to-blue-100 py-16 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-10 px-6">
                {/* Image 1 */}
                <div className="group relative w-64 h-64 bg-gray-100 shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                    <img
                        src="/Assets/Images/new.svg"
                        alt="Gallery Image 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white font-bold text-lg">Confidence</p>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="group relative w-64 h-64 bg-gray-100 shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                    <img
                        src="/Assets/Images/hello.svg"
                        alt="Gallery Image 2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white font-bold text-lg">Inovation</p>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="group relative w-64 h-64 bg-gray-100 shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                    <img
                        src="/Assets/Images/rename.svg"
                        alt="Gallery Image 3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white font-bold text-lg">Dreams</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Meddil
