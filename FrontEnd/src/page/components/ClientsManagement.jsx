import React from 'react'
import { useForm } from "react-hook-form"

const ClientsManagement = () => {

  const { register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/client", {
      method: "POST", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    let res = await r.json()
    console.log(data, res);
    // tostify

  }


  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen py-10">
      <div className="about flex flex-col justify-center items-center gap-6 mb-10">
        <h1 className="text-blue-600 text-4xl font-extrabold">Client Information</h1>
        <p className="text-gray-700 text-lg w-[60vw] text-center leading-relaxed">
          Provide us with your details, and we’ll make sure to contact you soon!
        </p>
      </div>

      <div className="card bg-green-100 shadow-xl rounded-lg p-8 w-[700px] mx-auto border-t-4 border-blue-500">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Your Image
            </label>
            <input
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="file"
              accept=".jpeg, .jpg, .png"
              {...register("url")}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Your Name
            </label>
            <input
              type="text"
              {...register("Name", { required: true })}
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Brief Description About You
            </label>
            <textarea
              {...register("Description", { required: true })}
              placeholder="Tell us about yourself"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Designation
            </label>
            <input
              type="text"
              {...register("Designation", { required: true })}
              placeholder="Your Job Title"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>

  )
}

export default ClientsManagement
