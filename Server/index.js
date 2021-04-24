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

app.post('/register/', (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    }

  con.query('INSERT INTO admin (username,password) VALUES (?,?)',
   [username,hash],
    (err,result) => {
      if(err) {
        console.log(err);
      }else {
        res.send("Worked");
      }
    }
  );
  });
});

//Compare Sign In input from for with DB 
app.post('/signin', function(req,res) {
  const username = req.body.username;
  const password = req.body.password;

  con.query('SELECT * FROM admin WHERE username = ?', 
      username, 
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              res.send(result);
            } else  {
              res.send({ message: "Incorrect password!" });
            }
          });
        } else {
          res.send({ message: "Admin is not registeres" });
        }
      }
    );
});

//Get data Barang from Barang table
app.get('/buku', function (req, res) {
  con.query('SELECT * FROM buku', (error, rows,field)  => {
      if (error) throw error;
      return res.send(rows);
  });
});

//Add data to tabel Buku
app.post('/addbuku/', (req,res) => {
    const bukuid = req.body.bukuid;
    const kodebuku = req.body.kodebuku;
    const judulbuku = req.body.judulbuku;
    const pengarang = req.body.pengarang;
    const kategori = req.body.kategori;
    const stok = req.body.stok;
    const stokinput = req.body.stok;
    const status = req.body.status;
  
    con.query('INSERT INTO buku (kodebuku, judulbuku,pengarang,kategori,stok,stokinput,status) VALUES (?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE status= VALUES(status),stokInput = VALUES(stokInput), stok = stok + stokInput',
     [kodebuku,judulbuku,pengarang,kategori,stok,stokinput,status],
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

  app.post('/transaksi/', (req,res) => {
    const transaksiid = req.body.transaksiid;
    const memberid = req.body.memberid;
    const tglpinjam = req.body.tglpinjam;
    const duedate = req.body.duedate;
    const status = req.body.status;

  
    con.query('INSERT INTO transaksi (memberid,tglpinjam,duedate,status) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE status= VALUES(status)',
     [memberid,tglpinjam,duedate,status],
      (err,result) => {
        if(err) {
          console.log(err);
        }else {
            console.log(result);
          res.send("Peminjaman diproses");
        }
      }
    );
  });

//Update data on table Barang
app.put("/updatestok", (req, res) => {
  const kodebuku = req.body.kodebuku;
  const stok = req.body.stok;

  con.query(
    "UPDATE buku SET stok = ? WHERE kodebuku = ?",
    [stok, kodebuku],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
