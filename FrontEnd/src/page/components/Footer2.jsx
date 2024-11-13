import React from 'react'

const Footer2 = () => {
  return (
    <div>
      <div className="foot bg-slate-800 flex justify-between items-center p-10 px-20">
        <div className="words text-white font-bold">
          Lorem ipsum dolor sit amet.
        </div>


        <div className="name">
          <div className="first flex justify-center items-center gap-1 cursor-pointer">
            <div className="logo">
              <img className="w-7" src="Assets/Icons/home2.svg" alt="" />
            </div>
            <div className="name mt-1 cursor-pointer">
              <span className='mx-1 text-xl font-bold text-white'>Real</span>
              <span className=' mx-1 text-xl text-white'>Trust</span>
            </div>
          </div>
        </div>



        <div className="links">
          <ul className='flex gap-2'>
            <li>
              <div className='w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto'>
                <img className='2-5' src="/Assets/Icons/Group-1.svg" alt="" />
              </div>
            </li>
            <li>
              <div className='w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto'>
                <img className='2-5' src="/Assets/Icons/Group.svg" alt="" />
              </div>
            </li>
            <li>
              <div className='w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto'>
                <img className='2-5' src="/Assets/Icons/Frame.svg" alt="" />
              </div>
            </li>
            <li>
              <div className='w-10 h-10 flex rounded-full bg-white items-center justify-center mx-auto'>
                <img className='2-5' src="/Assets/Icons/Linkedin.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer2
