import React from 'react'
import { useRef, useState, useEffect } from 'react'

const HappyClients = () => {

    const [ClientArray, setClientarray] = useState([])
    const Clientectref = useRef()

    const getClient = async () => {
        let req = await fetch("http://localhost:3000/ClientDetail")
        let Clients = await req.json();
        setClientarray(Clients)
        console.log(Clients);

    }

    useEffect(() => {
        getClient()
    }, [])

    return (
        <div className='flex flex-col items-center gap-5 bg-green-100 p-3'>
            <h1 className='text-blue-500 text-3xl font-bold mb-6'>Happy Clients</h1>

            <div className="cards">
                <ul className='flex gap-4 flex-wrap justify-center'>

                    {/* Card about the Client */}
                    {ClientArray.map((item, index) => {
                        return (
                            <li key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                                <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">

                                    {/* Client Image */}
                                    <div className="flex items-center justify-center mb-4">
                                        <img
                                            src={item.image}
                                            alt="Client Image"
                                            className="w-[80px] h-[80px] rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col gap-4">

                                        {/* Client Description */}
                                        <div className="description text-gray-600 text-sm mb-4">
                                            {item.Description}
                                        </div>

                                        {/* Client's Name and Designation */}
                                        <div>
                                            <div className="client-name text-blue-500 text-xl font-semibold mb-2">
                                                {item.Name}
                                            </div>
                                            <div className="client-designation text-gray-500 font-semibold">
                                                {item.Designation}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>

    )
}

export default HappyClients
