import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/buku.scss'

const Buku = ({bookID, kodebuku,judulbuku, pengarang,status,stok}) => {
    const pinjambuku = () => {
        alert(judulbuku)
    }

    return (
            <body>
                <div className="card">
                <div className="card__body">
                    <h5 className="card__title">{judulbuku}</h5>
                    <h6 className="card__subtitle mb-2 text-muted">{pengarang}</h6>
                    <p className="card__text text--medium">{status}</p>
                    <Link className="card__link" onClick={pinjambuku}>Pinjam</Link>
                </div>
                </div>
            </body>
    )
}

export default Buku
