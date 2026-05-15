import React from 'react';
import CarImage from './CarImage';
import CarDescription from './CarDescription';
import CarFeatures from './CarFeatures';
import CarAvailability from './CarAvailability';

function CarDetailsPage() {
  return (
    <div className='max-w-5xl mx-auto p-4 pt-6 mt-10 bg-white rounded-xl shadow-md'>
      <CarImage />
      <CarDescription />
      <CarFeatures />
      <CarAvailability />
    </div>
  );
}

export default CarDetailsPage;