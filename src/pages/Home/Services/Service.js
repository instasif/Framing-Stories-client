import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {description, img, name, _id} = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='truncate ...'>{description}</h4>
                <div className="card-actions justify-end">
                <Link to={`/service/${_id}`}>
                <button className="btn bg-green-700">Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;