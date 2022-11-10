import React from 'react';

const Fq = () => {
    return (
        <div className="text-center mb-4">
            <p className='text-2xl font-bold text-orange-600 mt-10'>Question/Answer</p>
            <h2 className='text-5xl font-semibold'>Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto my-auto'>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Q. Difference between SQL and NoSQL.</h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Fq;