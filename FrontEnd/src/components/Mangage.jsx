import React from 'react'
import { useState } from 'react';
import Form from './Form';


const Mangage = () => {
    return (
        <div>

            <div className="first relative">

                <img src="/Assets/Images/first.svg" alt="" className="w-full" />
                
                
                <div className="words absolute top-1/4 w-[100px] left-5 text-3xl font-bold text-white">
                    Consultation Design & Marketing
                </div>

                <Form />
                
            </div>
        </div>
    )
}

export default Mangage
