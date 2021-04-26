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
    var datatransaksi = JSON.parse(localStorage.getItem('transaksi'));


    //Get data upon accessing localhost
    useEffect(() => {
        if(datatransaksi !== null){
            var datatransaksi = JSON.parse(localStorage.getItem('transaksi'));

        Axios.post("http://localhost:3001/retrievetransaksi",
          {
            transaksiid: datatransaksi[0].transaksiid,
          }).then((response) => {
          if(response.data.message ){
            console.log(response.data.message)
          }else {
            setPeminjaman(response.data)
          }
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
        } else if(datatransaksi === null){
            alert("No Record")
        }
      }, [])
    
    if (datatransaksi !== null){
    return (
        <div >
            <Navbar />
            <div className="container-fluid bg--lightgrey">
                <div className="header__container">
                    <h3 className="text--bold text--xxl">Transaksi</h3>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><Link to="/Peminjaman" className="page-link text--semi-bold">Peminjaman</Link></li>
                            </ul>
                        </nav>
                </div>
                <div>
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
                                        denda={detilpeminjaman.denda}
                                        total={detilpeminjaman.total}
                                        status={detilpeminjaman.status}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )} else if (datatransaksi === null){
        return (
            <div >
                <Navbar />
                <div className="container-fluid bg--lightgrey">
                    <div className="header__container">
                        <h3 className="text--bold text--xxl">Transaksi</h3>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><Link to="/Peminjaman" className="page-link text--semi-bold">Peminjaman</Link></li>
                                </ul>
                            </nav>
                    </div>
                    <div>
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
                                            denda={detilpeminjaman.denda}
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
}

export default Listpeminjaman
