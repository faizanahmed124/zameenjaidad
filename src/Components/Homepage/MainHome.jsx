import React from 'react';
import Home from './Home';
import CirclesDivs from '../Feature-Elevating/Circlesdiv';
import Smallcirclesdiv2 from '../Smallcircles/Smalcirclesdiv2';    // Note the filename spelling
import TextImage from '../Text-Images/TextImage';


const MainHome = () => {
  return (
    <div>
      <Home/>
    
      <CirclesDivs />
      {/* <Smallcirclesdiv1/>  This must match the import name */}
      <Smallcirclesdiv2 />
      <TextImage />

    </div>
  );
};

export default MainHome;