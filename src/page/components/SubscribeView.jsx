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
    <div className='flex flex-col items-center gap-5 bg-blue-100 p-3'>
      <h1 className='text-blue-500 text-3xl font-bold mb-6'>Subscribers</h1>

      <div className="cards">
        <ul className='flex gap-4 flex-wrap justify-center'>
          {/* Card for each subscriber */}
          {subArray.map((item, index) => {
            return (
              <li key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">

                  {/* Card Content */}
                  <div className="p-6 flex flex-col gap-4">
                    {/* Subscriber input (e.g., email or name) */}
                    <div className="description text-gray-700 text-lg font-semibold">{item.input}</div>

                    {/* Optional: Add more content like a button or extra details */}
                    <div className="button flex justify-center mt-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-lg shadow-md transition duration-200">
                        View Details
                      </button>
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

export default SubscribeView
