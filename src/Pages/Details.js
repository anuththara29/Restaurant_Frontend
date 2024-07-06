import React, { useState, useEffect } from 'react';
import details from '../Images/details.jpg';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    telephone: ''
  });

  useEffect(() => {
    // Fetch restaurant details by ID
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/restaurants/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/restaurants/${id}`, formData);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Update Successful',
        });
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.message
      });
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/restaurants/${id}`);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Deletion Successful',
          timer: 6000,
        });
        navigate('/'); // Navigate to the home page after successful deletion
      } else {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Deletion Failed',
        text: error.message
      });
    }
  };

  return (
    <div className='relative w-full h-screen bg-cover bg-center' 
    style={{ backgroundImage: `url(${details})` }}>
      <div className="absolute inset-0 bg-black/60 flex flex-col 
      items-center justify-center">
        <form>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-white" htmlFor="name">Name</label>
            <input
              className="w-[400px] px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-white" htmlFor="address">Address</label>
            <input
              className="w-[400px] px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-white" htmlFor="telephone">Telephone</label>
            <input
              className="w-[400px] px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
          <div className="text-center py-4 text-xl space-x-10">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-full 
              hover:bg-primaryDark cursor-pointer" onClick={handleUpdate}>
              Update
            </button>
            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded-full 
              hover:bg-primaryDark cursor-pointer" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
