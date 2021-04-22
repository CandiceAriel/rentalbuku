import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/navbar.scss'

const Navbar = () => {
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
                    <ul className="navbar__main navbar__item">
                    </ul>
                    <ul className="navbar__item">
                        <li><Link to="/Signup" className="link">Sign Up</Link></li>
                        <li><Link to="/Signin" className="link">Sign In</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
