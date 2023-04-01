import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
    return (
        <div className=' my-3'>
            <h1 className='bg-red-400 text-white p-4 text-center text-3xl font-semibold'>Hello from Price list</h1>
            <div className='grid lg:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;