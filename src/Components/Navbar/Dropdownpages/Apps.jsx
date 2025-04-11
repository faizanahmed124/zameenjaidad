import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link 
        to="/" 
        className="hover:text-blue-500 hover:underline"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default HomePage;