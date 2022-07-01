import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral md:px-14 text-white uppercase font-sans">
                <div className="navbar-start">
                    {/* ========================= Mobile Drives =========================  */}
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-neutral">
                            <li><Link to='/'>ToDo</Link></li>
                            <li><Link to='/tasks'>Completed</Link></li>
                            <li> <Link to='/calendar'>Calendar</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className='text-xl md:text-2xl '>Endgame</Link>
                </div>
                {/* ========================= PC Navbar  =========================  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>ToDo</Link></li>
                        <li><Link to='/tasks'>Completed</Link></li>
                        <li> <Link to='/calendar'>Calendar</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-12 h-12 rounded-full' src={require('../../Images/LogImages.png')} alt="Images" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;