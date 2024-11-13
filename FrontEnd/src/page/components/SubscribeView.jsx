import React from 'react'
import { useRef, useState, useEffect } from 'react'

const SubscribeView = () => {
  const [subArray, setsubarray] = useState([])
  const subectref = useRef()

  const getsub = async () => {
    let req = await fetch("http://localhost:3000/mailDetail")
    let subs = await req.json();
    setsubarray(subs)
    console.log(subs);

  }

  useEffect(() => {
    getsub()
  }, [])

  return (
    <div className="flex flex-col items-center gap-5 bg-blue-100 p-6">
      <h1 className="text-blue-500 text-3xl font-bold mb-6">Subscribers</h1>

      <div className="cards w-full max-w-6xl">
        <ul className="flex flex-col gap-4 justify-center items-center">
          {/* Card for each subscriber */}
          {subArray.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-2">
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4 transition-transform transform hover:scale-105 hover:shadow-xl">

                  {/* Email Address */}
                  <div className="email flex-grow text-gray-700 text-base sm:text-lg font-medium truncate">
                    {item.Email}
                  </div>

                  {/* View Details Button */}
                  <div className="button flex-shrink-0 ml-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md transition duration-200">
                      View Details
                    </button>
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

export default SubscribeView
