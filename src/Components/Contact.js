import React from 'react';
import { FaPhone} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className='container py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Get in Touch</h2>
      <div className='flex items-center justify-center'>
        <ul>
          <li className='py-4 flex items-center'>
            <div className='bg-primary text-white rounded-full p-3 mr-2'>
              <FaPhone className='text-xl' />
            </div>
            <p className='text-lg sm:text-base'>+94 11 234 5678</p>
          </li>
          <li className='py-4 flex items-center'>
            <div className='bg-primary text-white rounded-full p-3 mr-2'>
              <FaEnvelope className='text-xl' />
            </div>
            <p className='text-lg sm:text-base'>support@dinespot.com</p>
          </li>
          <li className='py-4 flex items-center'>
            <div className='bg-primary text-white rounded-full p-3 mr-2'>
              <FaMapMarkerAlt className='text-xl' />
            </div>
            <p className='text-lg sm:text-base'>123, Gourmet Street, Colombo 10, Sri Lanka</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
