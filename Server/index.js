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
app.get('/buku', function (req, res) {
    con.query('SELECT * FROM detil_buku detilbuku INNER JOIN buku b WHERE detilbuku.bukuID = b.bukuID', (error, rows,field)  => {
        if (error) throw error;
        return res.send(rows);
    });
});