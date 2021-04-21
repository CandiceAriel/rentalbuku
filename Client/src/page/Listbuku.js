import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Buku from './Buku';
import '../scss/listbuku.scss'
import Navbar from '../component/Navbar';

const Listbuku = () => {
    const [buku,setBuku] =  useState([
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10,
            status: 'Avavilable'
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        },
        {
            bookID: '0001',
            kodebuku: '1001',
            judulbuku: 'Percy Jackson',
            pengarang: 'Rick Riordan',
            stok: 10
        }
    ])

    const [categories,setCategories] =  useState([
        {
            category: 'Fiction'
        },
        {
            category: 'Science-Fiction'
        }
    ])


    return (
        <div >
            <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            </head>
            <body>
            <Navbar />
            <div className="container-fluid">
            <div className="carousel__container">
            <div class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="./booknew.png" alt="First slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>
            </div>
            <div className="container-fluid">
            <div className="listbuku__container">
                <div className="listbuku__category category__wrapper">
                    <h3 className="text--subheading text--semi-bold">Filter</h3>
                    <h6>Buku</h6>
                    {categories.map(categories => (
                    <ul class="list-group">
                        <li class="group__item"><Link>{categories.category}</Link></li>
                    </ul>
                  ))}
                </div>  
              <div className="listbuku__item item__wrapper">
              <h3 className="text--subheading text--semi-bold">Katalog Buku</h3>
              <div className="katalog__wrapper">
              {buku.map(buku => (
                  <div className="col-m-12">
                        <Buku key={buku.id}
                        kodebuku={buku.kodebuku} 
                        judulbuku={buku.judulbuku} 
                        pengarang={buku.pengarang}
                        stok={buku.stok}
                        qty={buku.qty}/>
                    </div>
                  ))}
            </div>
              </div>  
            </div>
            </div>
            </body>
        </div>
    )
}

export default Listbuku