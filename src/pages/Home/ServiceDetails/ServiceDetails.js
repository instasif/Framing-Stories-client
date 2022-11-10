import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {img, description, name, price} = useLoaderData();
    return (
        <div className="card lg:card-side bg-rose-50 shadow-xl">
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <div className='my-50'>
                <h2 className="card-title text-5xl ">{name}</h2>
                <p className='text-2xl mb-0'>Details: {description}</p>
                <p className='text-xl'>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn bg-green-700">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;