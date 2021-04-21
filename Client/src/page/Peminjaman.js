import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/peminjaman.scss'

const Buku = ({kode,total,status}) => {
    const pinjambuku = () => {
        alert(kode)
    }

    return (
        <div className="peminjaman__container">
            <table className="peminjaman__table">
                <tbody>
                    <tr align="center" className="peminjaman__table table__rowproduct"><td className="table__colum"><p className="text--paragraph text--uppercase">Kode Pesanan</p><p className="text--paragraph">{kode}</p><p className="text--paragraph">Tanggal</p></td><td className="table__colum"><p className="text--paragraph text--uppercase">Kode Pesanan</p><p className="text--paragraph">{total}</p><p className="text--paragraph"></p></td><td className="table__colum"><p className="text--paragraph text--uppercase">Status Peminjaman</p><p className="text--paragraph">{status}</p><p className="text--paragraph"></p></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Buku
