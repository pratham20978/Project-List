import React from 'react'
import { useForm } from "react-hook-form"

const Form = () => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3000/form", {
            method: "POST", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        let res = await r.text()
        console.log(data, res);
        

    }
    return (

        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-[30vw]">
            <div className="bg-blue-600 bg-opacity-70 py-6 px-4 rounded-lg flex flex-col justify-center items-center">
                <div className="text-white font-bold text-xl mb-4 text-center">
                    Get a Free Consultation
                </div>

                <div className="container flex flex-col gap-6 w-full max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <input
                            className="bg-gray-900 text-white p-3 px-4 rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="text"
                            {...register("Name")}
                            placeholder="Full Name"
                        />
                        <input
                            className="bg-gray-900 text-white p-3 px-4 rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="email"
                            {...register("Email")}
                            placeholder="Email Address"
                        />
                        <input
                            className="bg-gray-900 text-white p-3 px-4 rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="tel"
                            {...register("Contact")}
                            placeholder="Mobile Number"
                        />
                        <input
                            className="bg-gray-900 text-white p-3 px-4 rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="text"
                            {...register("City")}
                            placeholder="Area, City"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-orange-600 hover:bg-orange-500 disabled:bg-orange-400 p-3 px-7 rounded-md text-white font-bold text-lg transition duration-200 ease-in-out"
                        >
                            Get Quick Quote
                        </button>
                    </form>
                </div>

            </div>
        </div >

    )
}

export default Form
