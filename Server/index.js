const mysql = require('mysql');
const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "Rental Buku",
  multipleStatements: true
});

//Connect to DB
con.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

app.listen(3001, () => {
    console.log("Connected!");
});

//Get data Barang from Barang table
app.get('/detilbuku', function (req, res) {
    con.query('SELECT * FROM detil_buku detilbuku INNER JOIN buku WHERE detilbuku.kodebuku=buku.kodebuku', (error, rows,field)  => {
        if (error) throw error;
        return res.send(rows);
    });
});

//Get data Barang from Barang table
app.post('/buku', function (req, res) {
  con.query('SELECT * FROM buku', (error, rows,field)  => {
      if (error) throw error;
      return res.send(rows);
  });
});

//Add data to tabel Buku
app.post('/createdetail/', (req,res) => {
    const bukuID = req.body.bukuID;
    const kodebuku = req.body.kodebuku;
    const judulbuku = req.body.judulbuku;
    const pengarang = req.body.pengarang;
    const kategori = req.body.kategori;
    const stok = req.body.stok;
    const stokinput = req.body.stok;
  
    con.query('INSERT INTO detil_buku (kodebuku, judulbuku,pengarang,kategori,stok,stokinput) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE stokInput = VALUES(stokInput), stok = stok + stokInput',
     [kodebuku,judulbuku,pengarang,kategori,stok,stokinput],
      (err,result) => {
        if(err) {
          console.log(err);
        }else {
            console.log(result);
          res.send("Worked");
        }
      }
    );
  });

  //Add data to tabel Buku
app.post('/create', (req,res) => {
    const bukuID = req.body.bukuID;
    const kodebuku = req.body.kodebuku;
    const status = req.body.status;
    req.setTimeout( 1000 * 60 * 10 ); 
  
    con.query('INSERT INTO buku (kodebuku,status) VALUES (?,?) ON DUPLICATE KEY UPDATE status = VALUES(status)',
     [kodebuku,status],
      (err,result) => {
        if(err) {
          console.log(err);
        }else {
            console.log(result);
          res.send("Worked");
        }
      }
    );
  });