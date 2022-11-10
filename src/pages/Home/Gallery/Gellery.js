import React from 'react';
import img1 from '../../../Assets/Gallery/img1.jpg'
import img2 from '../../../Assets/Gallery/img2.jpg'
import img3 from '../../../Assets/Gallery/img3.jpg'
import img4 from '../../../Assets/Gallery/img4.jpg'
import img5 from '../../../Assets/Gallery/img5.jpg'
import img6 from '../../../Assets/Gallery/img6.jpg'

const Gellery = () => {
    return (
        <div className="text-center my-4 mb-4">
                <p className='text-2xl font-bold text-orange-600'>Gallery</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img5} alt="Shoes" /></figure>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={img6} alt="Shoes" /></figure>
                </div>

                </div>
                </div>
    );
};

export default Gellery;