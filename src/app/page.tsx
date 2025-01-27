import React from 'react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import FeaturedNewCars from '@/components/FeaturedNewCars'



const page = () => {
  return (
    <div className='container mx-auto px-4'> 
      <HeroSection/>

      <div className='my-8'></div>
        <FeaturedNewCars/>

        </div>
  )
}

export default page