import React, { useState } from 'react'
import '../scss/peminjaman.scss'

const Peminjaman = ({transaksiID,totaltrans,status}) => {
    const pinjambuku = () => {
        alert(transaksiID)
    }

    return (
        <div className="peminjaman__container">
            <table className="peminjaman__table">
                <tbody>
                    <tr align="center" className="peminjaman__table table__rowproduct">
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Kode Pesanan</p>
                            <p className="text--medium">ID transaksi</p>
                            <p className="text--paragraph text--lightgrey">tgl pinjam</p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Total</p>
                            <p className="text--medium">{totaltrans}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Due date</p>
                            <p className="text--medium">due date</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Status</p>
                            <p className="text--medium">{status}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <p className="text--uppercase"></p>
                            <p className="text--paragraph"></p>
                            <p className="text--paragraph"></p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Peminjaman
