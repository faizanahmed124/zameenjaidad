import React from 'react';
import Home from './Home';
import CirclesDivs from '../InquiryPage/Circlesdiv';
import Smallcirclesdiv2 from '../Carousel/Smalcirclesdiv2';    // Note the filename spelling
import InquiryForm from '../InquiryPage/inquiries';



const MainHome = () => {
  return (
    <div>
      <Home/>
      <CirclesDivs />

      {/* <Smallcirclesdiv1/>  This must match the import name */}
      <Smallcirclesdiv2 />
      <InquiryForm/>
  

    </div>
  );
};

export default MainHome;