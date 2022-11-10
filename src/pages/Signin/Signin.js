import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../Assets/icons/icons8-google-48.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Signin = () => {
    const { createUser, handleGoogleLogIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name ,email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-green-700 font-bold">Sigin now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                            <div className="form-control mt-6">
                            <input className='btn bg-green-700' type="submit" value="Signin" />
                            </div>
                        </form>
                            <div className="divider  mt-5">OR SIGN IN WITH</div>
                            <div className="flex justify-center mt-5">
                                <div
                                onClick={handleGoogleLogIn}
                                className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
                                >
                                <img src={googleIcon} alt="" />
                                <p className="">Google</p>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default Signin;