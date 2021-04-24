import React, { useState } from 'react'
import '../scss/peminjaman.scss'

const Detilpeminjaman = ({kodebuku,judulbuku,harga,jumlah,subtotal,status}) => {

    return (
        <div className="peminjaman__container">
            <table className="peminjaman__table">
                <tbody>
                    <tr align="center" className="peminjaman__table table__rowproduct bg--white">
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Judul Buku</p>
                            <p className="text--medium">{judulbuku}</p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Harga</p>
                            <p className="text--medium">{harga}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Jumlah</p>
                            <p className="text--medium">{jumlah}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                        <p className="text--uppercase text--small text--lightgrey">Status</p>
                            <p className="text--medium">{status}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <button className="btn btn--small">Kembali</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detilpeminjaman
