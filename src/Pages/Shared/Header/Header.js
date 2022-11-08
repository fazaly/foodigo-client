import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link>Home</Link></li>
                    <li tabIndex={0}>
                        <Link className="justify-between">
                        Parent
                        </Link>
                    </li>
                    <li><Link>Blog</Link></li>
                </ul>
                </div>
                <Link className="btn btn-ghost uppercase text-xl">Foodigo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/' className='mr-5'>Home</Link></li>
                <li tabIndex={0}>
                    <Link className='mr-5'>Parent</Link>
                </li>
                <li><Link to='/blog' className='mr-5'>Blog</Link></li>
                <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-warning hover:bg-black hover:text-white hover:border-black text-[15px] font-semibold normal-case">Restaurant Search</button>
            </div>
        </div>
    );
};

export default Header;