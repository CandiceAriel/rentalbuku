import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Peminjaman from './Peminjaman';
import Navbar from '../component/Navbar';
import '../scss/listpeminjaman.scss'

const Listpeminjaman = () => {
    const [peminjaman,setPeminjaman] = useState ([
        {
            kode: 'Fi090767',
            total: 10000,
            status: "selesai"
        },
        {
            kode: 'Fi090767',
            total: 10000,
            status: "selesai"
        }
    ])

    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
            <div>
            <Navbar />
            </div>
            <div className="container-fluid bg--lightgrey">
                <div className="header__container">
                    <h3 className="text--bold text--xxl">Transaksi</h3>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><Link to="/Peminjaman" class="page-link text--semi-bold">Peminjaman</Link></li>
                                <li class="page-item"><Link class="page-link text--semi-bold">Pengembalian</Link></li>
                            </ul>
                        </nav>
                </div>
                <div className="container-fluid">
                    {peminjaman.map(peminjaman => (
                        <div className="listpeminjaman-item__wrapper" key={peminjaman.kode}>
                            <Peminjaman userID={peminjaman.kode}
                                kode={peminjaman.kode}  
                                total={peminjaman.total}
                                status={peminjaman.status}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Listpeminjaman
