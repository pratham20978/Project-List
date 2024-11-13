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
    <div className="flex flex-col items-center gap-5 bg-blue-100 p-6 md:p-10 lg:p-12">
      <h1 className="text-blue-500 text-4xl font-bold mb-8">Form Details</h1>

      <div className="cards w-full max-w-6xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card for each subscriber */}
          {subArray.map((item, index) => (
            <li key={index} className="p-2">
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-4">
                  {/* Full Name */}
                  <div className="fullName text-blue-600 text-xl font-semibold">
                    {item.Name}
                  </div>

                  {/* Email Address */}
                  <div className="email text-gray-700 text-sm">
                    <span className="font-semibold">Email: </span>{item.Email}
                  </div>

                  {/* Mobile Number */}
                  <div className="mobile text-gray-700 text-sm">
                    <span className="font-semibold">Mobile: </span>{item.Contact}
                  </div>

                  {/* City */}
                  <div className="city text-gray-700 text-sm">
                    <span className="font-semibold">City: </span>{item.City}
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

export default ContactForm
