import React from 'react';
import { Link } from 'react-router-dom';

const AboutLink = () => {
  return (
    <div className="relative">
      <Link 
        to="/about" 
        className="flex items-center hover:text-orange-500"
      >
        About us
      </Link>
    </div>
  );
};

export default AboutLink;