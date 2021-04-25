import React, { useState,useEffect } from 'react'
import Axios from 'axios'

import '../scss/detilpeminjaman.scss'

const Detilpeminjaman = ({transaksiid,judulbuku,harga,jumlah,total,denda,status}) => {
    const [jumlahdenda,setJumlahdenda] = useState(denda);

    //var dendakembali = JSON.parse(localStorage.getItem('subdenda'))

    useEffect(() => {
        Axios.post("http://localhost:3001/retrieveduedate",
            {
                transaksiid: transaksiid
            }).then((response) => {
                if(response.data.message ){
                    console.log(response.data.message)
                } else {
                    if(response.data){
                        localStorage.setItem('duedate', JSON.stringify(response.data));
                        
                    }
                }
            });
    }, [])

    const returnbook = () =>{
        const duedate = JSON.parse(localStorage.getItem('duedate'));

        var today = new Date();
        var masatenggang = new Date(duedate[0].duedate)

        var returndate = new Date(today);
            returndate.setDate(returndate.getDate() + parseInt(10));
        
        var tglkembali = returndate
        var bataspengembalian = masatenggang

        const msperday = 1000 * 60 * 60 * 24;
        var date1 = tglkembali.getTime();
        var date2 =  bataspengembalian.getTime();
        var difference = parseInt(Math.floor(( date1 - date2) / msperday));

        console.log(bataspengembalian);
        console.log(tglkembali);
        console.log(difference);

        if(difference >= 1){
            const subdenda = 10000 * difference;
            console.log(subdenda)
            //localStorage.setItem('subdenda', JSON.stringify(subdenda))

            setJumlahdenda(subdenda)
        }
        
    }

    return (
        <div className="detilpeminjaman__container">
            <table className="detilpeminjaman__table">
                <tbody>
                    <tr align="center" className="detilpeminjaman__table detilpeminjaman-table__rowdetil bg--white">
                        <td className="detilpeminjaman-table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Judul Buku</p>
                            <p className="text--medium">{judulbuku}</p>
                        </td>
                        <td className="detilpeminjaman-table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Harga</p>
                            <p className="text--medium">{harga}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="detilpeminjaman-table__colum">
                            <p className="text--uppercase text--small text--lightgrey">Jumlah</p>
                            <p className="text--medium">{jumlah}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="detilpeminjaman-table__colum">
                        <p className="text--uppercase text--small text--lightgrey">Denda</p>
                            <p className="text--medium">{jumlahdenda}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="detilpeminjaman-table__colum">
                        <p className="text--uppercase text--small text--lightgrey">Total</p>
                            <p className="text--medium">{total}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                        <p className="text--uppercase text--small text--lightgrey">Status</p>
                            <p className="text--medium">{status}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                            <button className="btn btn--small" onClick={returnbook}>Kembali</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detilpeminjaman
