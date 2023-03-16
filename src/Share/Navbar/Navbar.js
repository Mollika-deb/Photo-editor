import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/icon2.png'

const Navbar = () => {
    return (
        <div className='mx-10'>
            <div className="navbar   bg-black text-slate-300 font-semibold text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/editor'>Editor</Link></li>
             
              <li><Link to='/blog'>Blog</Link></li>
              
              
              
            </ul>
          </div>
         <div className='flex'>
            <img src={image} alt="" />
         <Link className="btn btn-ghost normal-case text-2xl">PhotoPolish</Link>
         </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
              <li><Link to='/editor' >Editor</Link></li>
              
              <li><Link to='/blog'>Blog</Link></li>
              
          </ul>
        </div>
        <div className="navbar-end   text-slate-300">
         
          
              
           
                   
                   <Link to='/signup' className="">Sign Up</Link>
                   <Link to='login' className=" lg:ml-5">Sign In</Link>
           
        </div>
      </div>
        </div>
    );
};

export default Navbar;