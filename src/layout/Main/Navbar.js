import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 px-10">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Content</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li><Link>Reading</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;