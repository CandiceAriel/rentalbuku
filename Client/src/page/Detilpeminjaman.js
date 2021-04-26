import React, { useState,useEffect } from 'react'
import Axios from 'axios'

import '../scss/detilpeminjaman.scss'

const Detilpeminjaman = ({detiltransaksiid,transaksiid,judulbuku,harga,jumlah,total,denda,status}) => {
    const [jumlahdenda,setJumlahdenda] = useState(denda);
    const [totaltransaksi,setTotaltransaksi] = useState(total);
    const [statuspinjam,setStatuspinjam] = useState(status);

    const [detilpeminjaman,setDetilpeminjaman] = useState ([])

    //var dendakembali = JSON.parse(localStorage.getItem('subdenda'))

    useEffect(() => {
        Axios.post("http://localhost:3001/retrievedate",
            {
                transaksiid: transaksiid
            }).then((response) => {
                if(response.data.message ){
                    console.log(response.data.message)
                } else {
                    if(response.data){
                        localStorage.setItem('date', JSON.stringify(response.data));
                    }
                }
            });
    }, [])


    const returnbook = () =>{
        const tanggal = JSON.parse(localStorage.getItem('date'))
        const tglpinjam = tanggal[0].tglpinjam;
        const duedate = tanggal[0].duedate;

        const today = new Date();
        const masatenggang = new Date(duedate)

        const returndate = new Date(today);
            returndate.setDate(returndate.getDate() + parseInt(10));
        
        const tglkembali = returndate
        const bataspengembalian = masatenggang

        const msperday = 1000 * 60 * 60 * 24;
        var difference = parseInt(Math.floor(( tglkembali - bataspengembalian) / msperday));

        console.log(bataspengembalian);
        console.log(tglkembali);
        console.log(difference);

        if(difference >= 1){
            const subdenda = 10000 * difference;
            console.log(subdenda)
            //localStorage.setItem('subdenda', JSON.stringify(subdenda))
            setJumlahdenda(subdenda)

            const totaltrans =  subdenda + (harga * jumlah);
            setTotaltransaksi(totaltrans)
            setStatuspinjam("Denda")

            Axios.put("http://localhost:3001/updatetransaksi", { 
                denda: subdenda ,
                status: statuspinjam,
                detiltransaksiid: detiltransaksiid
            }).then((response) => {
                setDetilpeminjaman(detilpeminjaman.map((detilpeminjaman) => {
                    return detilpeminjaman.detiltransaksiid === detiltransaksiid ? {
                        detiltransaksiid: detiltransaksiid,
                        transaksiid: transaksiid, 
                        judulbuku: judulbuku, 
                        harga: harga, 
                        jumlah: jumlah,
                        denda:denda, 
                        total: total, 
                        status: status
                    } : detilpeminjaman
                }))
                alert("data updated")
            }
            );

            Axios.put("http://localhost:3001/updatetotaltrans", { 
                total: totaltrans,
                detiltransaksiid: detiltransaksiid
            }).then((response) => {
                setDetilpeminjaman(detilpeminjaman.map((detilpeminjaman) => {
                    return detilpeminjaman.detiltransaksiid === detiltransaksiid ? {
                        detiltransaksiid: detiltransaksiid,
                        transaksiid: transaksiid, 
                        judulbuku: judulbuku, 
                        harga: harga, 
                        jumlah: jumlah,
                        denda:denda, 
                        total: total, 
                        status: status
                    } : detilpeminjaman
                }))
                alert("data updated")
            }
            );
        } else if(difference <= 0){
            difference=0;
            const subdenda = 10000 * difference;
            console.log(subdenda)
            //localStorage.setItem('subdenda', JSON.stringify(subdenda))
            setJumlahdenda(subdenda)

            Axios.put("http://localhost:3001/updatetransaksi", { 
                denda: subdenda ,
                status: "Dikembalikan",
                detiltransaksiid: detiltransaksiid
            }).then((response) => {
                setDetilpeminjaman(detilpeminjaman.map((detilpeminjaman) => {
                    return detilpeminjaman.detiltransaksiid === detiltransaksiid ? {
                        detiltransaksiid: detiltransaksiid,
                        transaksiid: transaksiid, 
                        judulbuku: judulbuku, 
                        harga: harga, 
                        jumlah: jumlah,
                        denda:denda, 
                        total: total, 
                        status: status
                    } : detilpeminjaman
                }))
                alert("data updated")
            } 
            );
        }

        Axios.post("http://localhost:3001/retrievedetiltransaksi",
            {
                transaksiid: transaksiid,
            }).then((response) => {
            if(response.data.message ){
                console.log(response.data.message)
            }else {
                setDetilpeminjaman(response.data)
            }
            });
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
                            <p className="text--medium">{totaltransaksi}</p>
                            <p className="text--paragraph"></p>
                        </td>
                        <td className="table__colum">
                        <p className="text--uppercase text--small text--lightgrey">Status</p>
                            <p className="text--medium">{statuspinjam}</p>
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
