import React from 'react'
import { useRef, useState, useEffect } from 'react'

const OurProjects = () => {
    const [projectArray, setProjectarray] = useState([])
    const projectref = useRef()

    const getProject = async () => {
        let req = await fetch("http://localhost:3000/projectDetail")
        let projects = await req.json();
        setProjectarray(projects)
        console.log(projects);

    }

    useEffect(() => {
        getProject()
    }, [])

    return (
        <div className="flex flex-col items-center gap-5 bg-blue-100 p-6">
            <h1 className="text-blue-500 text-3xl font-bold">Our Projects</h1>
            <p className="text-blue-900 text-center w-3/4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nam consectetur ea quia quasi voluptatibus quidem, dolorem voluptas architecto odio?
            </p>

            <div className="cards w-full max-w-7xl">
                <ul className="flex flex-wrap gap-6 justify-center">
                    {/* Card about the Project */}
                    {projectArray.map((item, index) => (
                        <li key={index} className="w-[250px] flex-shrink-0">
                            <div className="card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                                {/* Image */}
                                <img
                                    src={item.url}
                                    alt="Card Image"
                                    className="w-full h-[150px] object-cover"
                                />

                                {/* Card Content */}
                                <div className="p-4 flex flex-col justify-between flex-grow">
                                    {/* Title */}
                                    <div className="heading font-bold text-blue-500 text-xl mb-2 text-center">
                                        {item.Name}
                                    </div>

                                    {/* Description */}
                                    <div className="about text-gray-600 text-sm mb-4 text-center">
                                        {item.Description.length > 100
                                            ? `${item.Description.substring(0, 97)}...`
                                            : item.Description}
                                    </div>

                                    {/* Button */}
                                    <div className="button flex justify-center">
                                        <button className="bg-orange-600 hover:bg-orange-700 transition-colors p-2 px-6 rounded-lg text-white text-sm font-bold shadow-md">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default OurProjects
