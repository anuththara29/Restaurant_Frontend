import React from 'react';
import { useState } from 'react';
import hero from '../Images/hero.jpg';
import axios from 'axios';

function Hero() {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const handleViewRestaurants = async () => {
    if (showRestaurants) {
      setShowRestaurants(false);
    } else {
      try {
        const response = await axios.get('http://localhost:3001/api/restaurants');
        setRestaurants(response.data);
        setShowRestaurants(true);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    }
  };

    return (
      <div>
        <div className='relative w-full'>
          <img src={hero} alt='Hero' className='w-full h-[300px] md:h-[500px] object-cover' />
          <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center'>
            <h4 className='text-white text-3xl md:text-5xl font-bold text-center px-4 md:px-10'>
              Welcome to DineSpot
            </h4>
            <h1 className='text-white text-xl md:text-2xl font-bold text-center px-4 md:px-10 mt-2'>
              Your ultimate destination for delicious dining experiences
            </h1>
            <div className='pt-4'>
              <button 
                onClick={handleViewRestaurants}
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primaryDark cursor-pointer"
              >
                View Restaurants
              </button>
            </div>
          </div>
        </div>
        {showRestaurants && (
          <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-pink-100 rounded-md p-4 shadow-md text-center">
                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                <p className="text-black">{restaurant.address}</p>
                <p className="text-black">{restaurant.telephone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default Hero;
