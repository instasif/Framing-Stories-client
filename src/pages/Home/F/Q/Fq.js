import React from 'react';

const Fq = () => {
    return (
        <div className="text-center mb-4">
            <p className='text-2xl font-bold text-orange-600 mt-10'>Question/Answer</p>
            <h2 className='text-5xl font-semibold'>Get Started</h2>
            <div className='grid  ms-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Q. Difference between SQL and NoSQL.</h2>
                <p>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Q. What is JWT, and how does it work?</h2>
                <p>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.</p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Q. What is the difference between javascript and NodeJS?</h2>
                <p>Ans: NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                </p>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Q. How does NodeJS handle multiple requests at the same time?git </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Fq;