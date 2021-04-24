import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Peminjaman from './Peminjaman';
import Detilpeminjaman from './Detilpeminjaman';
import Navbar from '../component/Navbar';
import '../scss/listpeminjaman.scss'

const Listpeminjaman = () => {
    const [peminjaman,setPeminjaman] = useState ([
        {
            kode: 'Fi090767',
            judul: 'percy jackson',
            pengarang: 'Rick Riordan',
            harga: 10000,
            jumlah: 1,
            totaltrans: 10000,
            status: "selesai",
            
        },
        {
            kode: 'Fi090767',
            judul: 'percy jackson',
            pengarang: 'Rick Riordan',
            harga: 10000,
            jumlah: 1,
            totaltrans: 10000,
            status: "selesai"
        },
        {
            kode: 'Fi090767',
            judul: 'percy jackson',
            pengarang: 'Rick Riordan',
            harga: 10000,
            jumlah: 1,
            totaltrans: 10000,
            status: "selesai"
        },
        {
            kode: 'Fi090767',
            judul: 'percy jackson',
            pengarang: 'Rick Riordan',
            harga: 10000,
            jumlah: 1,
            totaltrans: 10000,
            status: "selesai"
        }
    ])

    const [detilpeminjaman,setDetilpeminjaman] = useState ([
        {
            kode: 'tu0130',
            judul:'Percy Jackson',
            pengarang: 10000,
            harga: "selesai",
            jumlah: 10,
            status: 'selesai'
        },
        {
            kode: 'tu0130',
            judul: 'Percy Jackson',
            pengarang: 10000,
            harga: "selesai",
            jumlah: 10,
            status: 'selesai'
        }
    ])

    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
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
                            </ul>
                        </nav>
                </div>
                <div className="container-fluid">
                    <div className="listpeminjaman-item__wrapper">
                        {peminjaman.map(peminjaman => (
                                <div className="listpeminjaman-item__wrapper" key={peminjaman.transaksiID}>
                                <Peminjaman transaksiID={peminjaman.transaksiID}
                                    memberID={peminjaman.memberID}  
                                    totaltrans={peminjaman.totaltrans}
                                    status={peminjaman.status}
                                    tglpinjam={peminjaman.tglpinjam}
                                    duedate={peminjaman.duedate}/>

                                {detilpeminjaman.map(detilpeminjaman => (
                                    <Detilpeminjaman detiltransaksiID={detilpeminjaman.detiltransaksiID}
                                        transaksiID={detilpeminjaman.transaksiID}  
                                        kodebuku = {detilpeminjaman.kodebuku}
                                        judul={detilpeminjaman.judul}  
                                        pengarang={detilpeminjaman.pengarang}
                                        harga={detilpeminjaman.harga}
                                        jumlah={detilpeminjaman.jumlah}
                                        total={detilpeminjaman.total}
                                        status={detilpeminjaman.status}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listpeminjaman
