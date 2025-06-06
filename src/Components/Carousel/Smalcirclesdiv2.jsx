import React, { useState, useEffect } from 'react';

const Smallcirclesdiv1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Faster transition - changed from 3000ms to 1000ms

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      <div className="relative w-full mx-">
        <div className="flex">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0"
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            >
              <img 
                src={image} 
                alt={`Property ${index + 1}`}
                className="w-full h-64 sm:h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Smallcirclesdiv1;