import React from 'react';
import about from '../Images/about.webp';

function About() {
  return (
    <div className='container py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>About DineSpot</h2>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 p-4'>
          <img src={about} alt='' className='w-full h-auto rounded-lg' />
        </div>
        <div className='md:w-1/2 p-4'>
          <p className='text-lg mb-4'>
            Welcome to 
            <span className='font-bold text-primary'> DineSpot</span>
            ! Our mission is to connect food enthusiasts with the best dining experiences in town. 
            Whether you're looking for a cozy cafe, a gourmet restaurant, or a quick bite, DineSpot 
            is here to help you find the perfect spot.
          </p>
          <p className='text-lg mb-4'>
            With our easy-to-use platform, you can search for restaurants, read reviews, and even add or 
            update restaurant listings. Our goal is to create a community where food lovers can share 
            their experiences and discover new favorites.
          </p>
          <p className='text-lg'>
            Join us on this culinary journey and explore the vibrant dining scene with 
            <span className='font-bold text-primary'> DineSpot</span>!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

