import React,{ useState,useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom'
import Axios from 'axios';

import '../scss/addbuku.scss'
import Navbar from '../component/Navbar';

const Addbuku = () => {
    const [bukuID,setBukuid] = useState('');
    const [kodebuku,setKodebuku] = useState('');
    const [judulbuku,setJudulbuku] = useState('');
    const [pengarang,setPengarang] = useState('');
    const [kategori,setKategori] = useState('');
    const [stokinput,setStokinput] = useState('');
    const [status,setStatus] = useState('In Stock');

    const [buku,setBuku] =  useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/detilbuku").then((response) => {
              setBuku(response.data)
          });
      }, []);

    //update Kode value
    const updateKodebuku = e => {
        setKodebuku(e.target.value);
    }
    
    //update Judul value
    const updateJudulbuku = e => {
        setJudulbuku(e.target.value);
    }

    //Update Pengarang value
    const updatePengarang = e => {
        setPengarang(e.target.value);
    }

    //Update Kategori value
    const updateKategori = e => {
        setKategori(e.target.value);
    }

    //Update Stok value
    const updateStok = e => {
        setStokinput(e.target.value);
    }

    //Add Barang to DB
    const addBuku = () => {
        Axios.post("http://localhost:3001/create/",
        {
            bukuID: bukuID,
            kodebuku: kodebuku,
            status: 'In stock'
        }).then((response) => {
            console.log(response.data);
            alert('Berhasil')
        });
        
        Axios.get("http://localhost:3001/detilbuku").then((response) => {
              setBuku(response.data)
          });
        
        Axios.post("http://localhost:3001/createdetail/",
        {
            kodebuku: kodebuku,
            judulbuku: judulbuku,
            pengarang: pengarang,
            kategori:kategori,
            stok: parseInt(stokinput),
            stokinput: parseInt(stokinput)
        }).then((response) => {
            console.log(response.data);
            alert('Berhasil')
        });

        Axios.get("http://localhost:3001/detilbuku").then((response) => {
              setBuku(response.data)
          });
    }

    return (
        <div>
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
            <Navbar />
            <div className="addbuku__container">                
                <form className="addbuku__form">
                    <div className="form__title">
                        <h5 className="addbuku__title">
                            BookRental
                            <h5 className="addbuku__title">Masukkan data buku</h5>
                        </h5>
                    </div>
                    <div className="addbuku-form__group">
                        <input type="text" className="form__input" placeholder="Kode Buku" value={kodebuku} onChange={updateKodebuku}/>
                    </div>
                    <div className="addbuku-form__group">
                        <input type="text" className="form__input" placeholder="Judul Buku" value={judulbuku} onChange={updateJudulbuku}/>
                    </div>
                    <div className="addbuku-form__group">
                        <input type="text" className="form__input" placeholder="Pengarang" value={pengarang} onChange={updatePengarang}/>
                    </div>
                    <div className="addbuku-form__group">
                        <input type="text" className="form__input" placeholder="Kategori" value={kategori} onChange={updateKategori}/>
                    </div>
                    <div className="addbuku-form__group">
                        <input type="text" className="form__input" placeholder="Stok" value={stokinput} onChange={updateStok}/>
                    </div>
                    <Link onClick={addBuku} className="link--big">Add</Link>
                </form>
                <div>
            { buku.map(buku => (
                <div className="addbuku__wrapper" key={buku.id}>
                <table className="addbuku__table">
                    <tbody> 
                        <tr>
                        <td>{buku.kodebuku}</td>
                        <td>{buku.judulbuku}</td>
                        <td>{buku.pengarang}</td>
                        <td>{buku.status}</td>
                        <td>{buku.stok}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ))}
        </div>
            </div>
        </div>
    )
}

export default Addbuku
