import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/buku.scss'

const Buku = ({bookID, kodebuku,judulbuku, pengarang,status,stok}) => {
    const pinjambuku = () => {
        alert(judulbuku)
    }
    return (
        <div className="buku__container">
            <body>
            {/*<table className="buku__table">
                    <tbody>
                        <tr className="buku__table table__item">{judulbuku}</tr>
                        <tr className="buku__table table__item">{pengarang}</tr>
                        <tr className="buku__table table__item">{status}</tr>
                        <tr className="buku__table table__item">{stok}</tr>
                        <tr className="buku__table table__item__addtocart"><button className="button"> BELI SEKARANG </button></tr>
                    </tbody>
            </table>*/}
                <div className="card">
                <div className="card__body">
                    <h5 className="card__title">{judulbuku}</h5>
                    <h6 className="card__subtitle mb-2 text-muted">{pengarang}</h6>
                    <p className="card__text">{status}</p>
                    <Link className="card__link" onClick={pinjambuku}>Pinjam</Link>
                </div>
                </div>
            </body>
        </div>
    )
}

export default Buku
