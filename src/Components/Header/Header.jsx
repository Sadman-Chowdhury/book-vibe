import { NavLink } from "react-router-dom"
import '../Font/font.css'
import './Header.css'

const Header = () => {
    const links = <>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/listedBooks" activeClassName="active">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead" activeClassName="active">Pages to Read</NavLink></li>
        <li><NavLink to="/reviews">Reader's Review</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 work-sans mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="text-2xl lg:text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;