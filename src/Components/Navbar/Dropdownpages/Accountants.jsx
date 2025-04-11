import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link 
        to="/forrents"
        className="hover:text-blue-500 hover:underline"
      >
        For Rents
      </Link>
    </div>
  );
};

export default HomePage;