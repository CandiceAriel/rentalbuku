import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import Peminjaman from './Peminjaman';
import Detilpeminjaman from './Detilpeminjaman';
import Navbar from '../component/Navbar';
import '../scss/listpeminjaman.scss'

const Listpeminjaman = () => {
    const [peminjaman,setPeminjaman] = useState ([])

    const [detilpeminjaman,setDetilpeminjaman] = useState ([])


    //Get data upon accessing localhost
    useEffect(() => {
        var datatransaksi = JSON.parse(localStorage.getItem('transaksi'));

        Axios.get("http://localhost:3001/retrievetransaksi").then((response) => {
              setPeminjaman(response.data)
        });

          Axios.post("http://localhost:3001/retrievedetiltransaksi",
          {
            transaksiid: datatransaksi[0].transaksiid,
          }).then((response) => {
          if(response.data.message ){
            console.log(response.data.message)
          }else {
            setDetilpeminjaman(response.data)
          }
        });
      }, [])

    return (
        <div>
            <Navbar />
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
                                <Peminjaman transaksiid={peminjaman.transaksiid}
                                    memberid={peminjaman.memberid}
                                    status={peminjaman.status}
                                    tglpinjam={peminjaman.tglpinjam}
                                    duedate={peminjaman.duedate}/>

                                {detilpeminjaman.map(detilpeminjaman => (
                                    <Detilpeminjaman detiltransaksiid={detilpeminjaman.detiltransaksiid}
                                        transaksiid={detilpeminjaman.transaksiid}  
                                        kodebuku = {detilpeminjaman.kodebuku}
                                        judulbuku={detilpeminjaman.judulbuku}
                                        harga={detilpeminjaman.harga}
                                        jumlah={detilpeminjaman.jumlah}
                                        subtotal={detilpeminjaman.subtotal}
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
