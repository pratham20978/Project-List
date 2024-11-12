import React from 'react'
import { useRef, useState, useEffect } from 'react'

const ContactForm = () => {

  const [subArray, setsubarray] = useState([])
  const subectref = useRef()

  const getform = async () => {
    let req = await fetch("http://localhost:3000/formDetail")
    let form = await req.json();
    setsubarray(form)
    console.log(form);

  }

  useEffect(() => {
    getform()
  }, [])

  return (
    <div className='flex flex-col items-center gap-5 bg-blue-100 p-3'>
      <h1 className='text-blue-500 text-3xl font-bold mb-6'>Form Details</h1>

      <div className="cards">
        <ul className='flex gap-4 flex-wrap justify-center flex-wrap'>
          {/* Card for each subscriber */}
          {subArray.map((item, index) => {
            return (
              <li key={index} className="w-2/3 p-2">
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">

                  {/* Card Content */}
                  <div className="p-6 flex flex-col gap-4">

                    {/* Full Name */}
                    <div className="fullName text-blue-600 text-xl font-semibold mb-2">
                      {item.input1}
                    </div>

                    {/* Email Address */}
                    <div className="email text-gray-700 text-sm mb-2">
                      <span className="font-semibold">Email: </span>{item.input2}
                    </div>

                    {/* Mobile Number */}
                    <div className="mobile text-gray-700 text-sm mb-2">
                      <span className="font-semibold">Mobile: </span>{item.input3}
                    </div>

                    {/* City */}
                    <div className="city text-gray-700 text-sm mb-4">
                      <span className="font-semibold">City: </span>{item.input4}
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

export default ContactForm
