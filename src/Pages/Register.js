import React, { useState } from 'react';
import axios from 'axios';
import registration from '../Images/registration.jpg';
import Swal from 'sweetalert2';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    telephone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Verify telephone number
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.telephone)) {
        throw new Error('Please enter a valid telephone number');
      }

      //Register the restaurant
      const response = await axios.post('http://localhost:3001/api/restaurants', formData);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
        });
        //clear form data
        setFormData({
          name: '',
          address: '',
          telephone: ''
        });
      } else {
         throw new Error('Registration failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message
      });
      setFormData({
        name: '',
        address: '',
        telephone: ''
      });
    }
  };

  return (
    <div className="container mx-auto py-12 flex flex-wrap justify-center items-center">
      <div className="w-full h-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-8 text-center py-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="address">Address</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="telephone">Telephone</label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Enter your telephone number"
              required
            />
          </div>
          <div className="text-center py-4 text-xl">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-full 
              hover:bg-primaryDark cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:h-[550px] md:w-1/2 p-4">
        <img src={registration} alt="Registration" 
        className="w-full h-full rounded-md text-center" />
      </div>
    </div>
  );
}

export default Registration;
