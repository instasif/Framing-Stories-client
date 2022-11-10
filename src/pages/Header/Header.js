import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    return (
        <div className="navbar bg-green-700">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-700 rounded-box w-52">
                        <li><Link className='text-white' to="/">Home</Link></li> 
                        {
                            user?.uid ? <li><Link onClick={logOut} className='text-white'>Logout</Link></li> : <li><Link className='text-white' to="/Login">Login</Link></li>
                        }
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-white normal-case text-xl">Framing Stories</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link className='text-white' to="/">Home</Link></li> 
                        {
                            user?.uid ? <li><Link onClick={logOut} className='text-white'>Logout</Link></li> : <li><Link className='text-white' to="/Login">Login</Link></li>
                        }
                </ul>
            </div>
            </div>
    );
};

export default Header;




