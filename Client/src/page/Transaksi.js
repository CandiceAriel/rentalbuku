import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar';
import '../scss/transaksi.scss'

const Transaksi = () => {
    return (
        <div>
            <Navbar />
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
