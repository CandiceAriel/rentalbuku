import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import Buku from './Buku';
import '../scss/listbuku.scss'
import Navbar from '../component/Navbar';

const Listbuku = () => {
    const [buku,setBuku] =  useState([])
    const [memberid,setMemberid] = useState('')

    var today = new Date().toISOString().slice(0, 10);

    var myDate = new Date(today);
        myDate.setDate(myDate.getDate() + parseInt(7));
    
    var duedate = myDate.toISOString().slice(0, 10)

    //Get data upon accessing localhost
    useEffect(() => {
        Axios.get("http://localhost:3001/buku").then((response) => {
              setBuku(response.data)
          });
      }, [])

    const [categories,setCategories] =  useState([
        {
            category: 'Fiction'
        },
        {
            category: 'Science-Fiction'
        }
    ])

    //update Password value
    const updateMemberid = e => {
        setMemberid(e.target.value);
    }

    const tambahmember = () => {
        localStorage.setItem('memberid', JSON.stringify(memberid))

        Axios.post("http://localhost:3001/transaksi",
         {
            memberid: memberid,
            tglpinjam: today,
            duedate: duedate,
            status: 'Berhasil',
         }).then((response) => {
            alert("Good");

            Axios.post("http://localhost:3001/retrievetransaksiid",
            {
                memberid: memberid
            }).then((response) => {
                if(response.data.message ){
                    console.log(response.data.message)
                } else {
                    if(response.data){
                        localStorage.setItem('transaksi', JSON.stringify(response.data));
                    }
                }
            });
        });
    }

    return (
        <div>
            <Navbar />
            <div className="carousel__container">
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./booknew.png" alt="First slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
            <div className="container-fluid">
            <div className="listbuku__container">
                <div className="listbuku__category category__wrapper">
                    <div className="flex--row">
                        <h3 className="text--subheading text--semi-bold">Filter</h3>
                    </div>
                    <div>
                        <h6>Buku</h6>
                        {categories.map(categories => (
                            <ul className="list-group" key={categories.category}>
                                <li className="group__item" key={categories.category}><Link>{categories.category}</Link></li>
                            </ul>
                        ))}
                    </div>
                </div>  
              <div className="listbuku__item item__wrapper">
                <div className="flex--row katalog__title">
                    <h3 className="text--subheading text--semi-bold">Katalog Buku</h3>
                    <Link to="/Addbuku" className="link--small">Add</Link>
                </div>
                <div className="group-input">
                    <input type="text" className="input-member" placeholder="Masukkan member" value={memberid} onChange={updateMemberid}/>
                    <Link className="link--small" onClick={tambahmember}>+</Link>
                </div>
                <div className="katalog__wrapper">
                {buku.map(buku => (
                    <div className="wrapper" key={buku.id}>
                            <Buku key={buku.id}
                            kodebuku={buku.kodebuku} 
                            judulbuku={buku.judulbuku} 
                            pengarang={buku.pengarang}
                            status={buku.status}
                            stok={buku.stok}
                            qty={buku.qty}/>
                        </div>
                    ))}
                </div>
              </div>  
            </div>
            </div>
        </div>
    )
}

export default Listbuku
