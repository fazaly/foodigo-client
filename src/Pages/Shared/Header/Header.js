import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../assets/images/serving-dish.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    // logOut
    const handleLogOut = () => {
        logOut()
        .then( result => {
            // const user = result.user;
            // console.log(user);
        })
        .catch( error => console.error(error))
    }

    const menuItems = <>
        <li className='font-semibold mr-5'><Link to='/'>Home</Link></li>
        <li><Link to='/blog' className='mr-5'>Blog</Link></li>
        {
            user?.email ?
            <>
                <li className='font-semibold mr-5'><Link to='/allservices'>All Service</Link></li>
                <li className='font-semibold mr-5'><Link to='/reviews'>My Reviews</Link></li>
                <li className='font-semibold mr-5'><Link to='/service'>Add Service</Link></li>
                <li className='font-semibold'>
                    <button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button>
                </li>
            </>
            :
            <>
                <li className='font-semibold mr-5'><Link to='/login'>Login</Link></li>
                <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
            </>
            }
            </>

    return (
        <div className="navbar bg-gray-300 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link className="btn btn-ghost uppercase text-xl">Foodig<img className='w-6 h-6 text-red-600' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-warning hover:bg-black hover:text-white hover:border-black text-[15px] font-semibold normal-case">Restaurant Search</button>
            </div>
        </div>
    );
};

export default Header;