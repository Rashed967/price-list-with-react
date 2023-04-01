import React from 'react';

const PriceCard = ({price}) => {
    
    return (
        <div className='bg-amber-200 p-4 rounded-md my-4'>
            <h2 className='text-center'>
                <span className='text-4xl font-bold text-blue-400'>{price.price}</span>
                <span className='text-2xl font-medium'>/mon</span>
            </h2>
            <h1 className='text-3xl font-semibold text-center'>{price.name}</h1>
            <p>Features</p>
            <li>{price.features}</li>
        </div>
    );
};

export default PriceCard;