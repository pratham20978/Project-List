import React from 'react'
import Aboutus from './Aboutus'
import Meddil from './Meddil'
import WhyChoose from './WhyChoose'
import First from './First'

const About = () => {
  return (
    <div className='flex flex-col gap-10'>
      <First />
      <WhyChoose />
      <Meddil />
      <Aboutus />
    </div>
  )
}

export default About
