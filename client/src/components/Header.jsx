import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from "react-hot-toast";

const Header = () => {

    const {user, logOut } = useContext(AuthContext);

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
    </>

    const handleLogOut = () =>{
        logOut()
        .then(() => toast.success('User log Out!'))
        .catch(err => toast.error(err))
    }

    return (
        <div className="navbar bg-gray-400 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid && <>
                    <h2 className="text-2xl text-white font-semibold">{user?.displayName}</h2>
                    <button onClick={handleLogOut} className='bg-red-500 rounded-full px-6 py-2 text-white mx-3'>Log Out</button>
                </>}
                <button className="btn border-0 bg-pink-500 text-white">Appointment</button>
            </div>
        </div>
    );
};

export default Header;