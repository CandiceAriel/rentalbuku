import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/navbar.scss'

const Navbar = () => {
    var signindata = JSON.parse(localStorage.getItem('signindata'));

    const signout = () => {
        localStorage.clear();
    }

    if(signindata === null){
        return (
            <div className="navbar__container">
                    <ul className="navbar__subnav flex-start">
                        <li><Link to="/SignIn" className="link">Sign Out</Link></li>
                    </ul>
                    <nav className="navbar__main">
                        <ul className="navbar__item flex-start">
                            <li><Link to="/" className="link">RentalBuku</Link></li>
                            <li><Link to="/" className="link">Buku</Link></li>
                            <li><Link to="/Profile" className="link">Profile</Link></li>
                            <li><Link to="/Peminjaman" className="link">Transaksi</Link></li>
                        </ul>
                        <ul className="navbar__item flex-end">
                            <li><Link to="/Signup" className="link">Sign Up</Link></li>
                            <li><Link to="/Signin" className="link">Sign In</Link></li>
                        </ul>
                    </nav>
            </div>
        )
    } else if (signindata !== null){
        return (
            <div className="navbar__container">
                    <ul className="navbar__subnav flex-start">
                        <li><Link to="/SignIn" className="link">Sign Out</Link></li>
                    </ul>
                    <nav className="navbar__main">
                        <ul className="navbar__item flex-start">
                            <li><Link to="/" className="link">RentalBuku</Link></li>
                            <li><Link to="/" className="link">Buku</Link></li>
                            <li><Link to="/Member" className="link">Member</Link></li>
                            <li><Link to="/Peminjaman" className="link">Transaksi</Link></li>
                        </ul>
                        <ul className="navbar__item flex-end">
                            <li><Link to="/Signin" className="link" onClick={signout}>Sign Out</Link></li>
                        </ul>
                    </nav>
            </div>
        )
    }
    
}

export default Navbar
