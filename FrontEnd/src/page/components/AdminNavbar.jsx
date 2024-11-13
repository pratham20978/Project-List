import React from 'react'
import { Link } from 'react-router-dom'


const AdminNavbar = () => {
    
    return (
        <div className='flex justify-between bg-pink-df p-5 mx-20'>
            <div className="first flex justify-center items-center gap-1 cursor-pointer">
                <div className="logo">
                    <img className="w-7" src="/local/home.svg" alt="" />
                </div>
                <div className="name mt-1 cursor-pointer">
                    <span className='mx-1 text-xl font-bold text-slate-800'>Real</span>
                    <span className=' mx-1 text-xl text-slate-800'>Trust</span>
                </div>
            </div>
            <div className="second">
                <div className="items flex gap-10 items-center">
                    <ul className='flex gap-10'>
                        <li className='cursor-pointer text-slate-700 font-bold'>Home</li>
                        <li className='cursor-pointer text-slate-700 font-bold'>About</li>
                        <li className='cursor-pointer text-slate-700 font-bold'>About Project</li>
                        <li className='cursor-pointer text-slate-700 font-bold'>Contact</li>
                    </ul>
                    <Link to="/"><div className="cursor-pointer button bg-orange-600 p-3 rounded-lg px-7">
                        <button className='text-white font-bold text-xl'>Landing</button>
                    </div></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
