import React from 'react';
import './CarCategoryCards.css';

const CarCategoryCards = () => {
  const carCategories = [
    { id: 1, name: 'Economy', description: 'Fuel-efficient cars for budget-friendly travel' },
    { id: 2, name: 'SUV', description: 'Spacious and versatile vehicles for families or groups' },
    { id: 3, name: 'Luxury', description: 'High-end cars with premium features and comfort' }
  ];

  return (
    <div className='car-category-cards flex flex-wrap justify-center mb-4'>
      {carCategories.map((category) => (
        <div key={category.id} className='car-category-card w-80 m-4 bg-white rounded-lg shadow-md'>
          <h2 className='car-category-name text-2xl font-bold mb-2'>{category.name}</h2>
          <p className='car-category-description text-md mb-4'>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CarCategoryCards;