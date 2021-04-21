import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar';
import '../scss/transaksi.scss'

const Transaksi = () => {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
            <div>
            <Navbar />
            </div>
            <div className="container">
                <h1>Transaksi</h1>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><Link to="/Peminjaman" class="page-link">Peminjaman</Link></li>
                        <li class="page-item"><Link class="page-link">Pengembalian</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Transaksi
