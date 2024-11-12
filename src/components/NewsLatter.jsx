import React from 'react'
import { useForm } from "react-hook-form"

const NewsLatter = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3000/email", {
            method: "POST", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        // let res = await r.json()
        // console.log(data, res);
        // tostify

    }

    return (
        <div className="getmail flex justify-center items-center bg-blue-500 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <form className="flex items-center w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="flex-grow p-3 px-4 border-2 border-transparent focus:border-white placeholder-opacity-100 placeholder:text-lg placeholder:text-white placeholder:font-semibold bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    type="email"
                    {...register("input", { required: true })}
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-3 px-6 text-lg bg-white text-blue-500 font-bold rounded-md shadow-md hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 ease-in-out"
                >
                    Subscribe
                </button>
            </form>
        </div>

    )
}

export default NewsLatter
