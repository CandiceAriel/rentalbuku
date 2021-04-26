import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import '../scss/buku.scss'

const Buku = ({bookID, kodebuku,judulbuku, pengarang,status,stok}) => {
    const [buku,setBuku] = useState([]);
    const [denda,setDenda] = useState(0);

    var today = new Date().toISOString().slice(0, 10);

    var myDate = new Date(today);
        myDate.setDate(myDate.getDate() + parseInt(7));
    
    var duedate = myDate.toISOString().slice(0, 10)

    const [harga,setHarga] = useState(1000);
    const [jumlah,setJumlah] = useState(1);

    const pinjambuku = (kodebuku) => {
        var datatransaksi = JSON.parse(localStorage.getItem('transaksi'));
        Axios.post("http://localhost:3001/transaksidetail",
        {
            transaksiid: datatransaksi[0].transaksiid,
            kodebuku: kodebuku,
            judulbuku: judulbuku,
            harga: 10000,
            jumlah: 1,
            denda: denda,
            total: (harga*jumlah)+denda,
            status: 'Berhasil',
        }).then((response) => {
            {updatestok(kodebuku);}
            alert("Good");
        });
    }

    //Update Barang to DB based on new value
    const updatestok = (kodebuku) => {
        Axios.put("http://localhost:3001/updatestok", { stok: parseInt(stok-1) , kodebuku: kodebuku }).then(
          (response) => {
            setBuku(buku.map((buku) => {
                return buku.kodebuku === kodebuku ? {kodebuku: kodebuku,judulbuku: judulbuku, pengarang: pengarang, stok:stok, status: status } : buku
            }))
            alert('Data Updated')
          }
        );
    };

    return (
        <div>
            <div className="card">
            <div className="card__body">
                <h5 className="card__title">{kodebuku}</h5>
                <h5 className="card__title">{judulbuku}</h5>
                <h6 className="card__subtitle mb-2 text-muted">{pengarang}</h6>
                <p className="card__text text--medium">{status}</p>
                <Link className="card__link" onClick={() => {pinjambuku(kodebuku);}}>Pinjam</Link>
            </div>
            </div>
        </div>
    )
}

export default Buku
