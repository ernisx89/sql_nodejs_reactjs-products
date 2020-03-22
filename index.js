//ernestas 20200322
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

//queries
const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'; 

//connection with MySql Workbench
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'react_sql'
});

connection.connect(err => {
  if(err) {
    return err;
  }
});

// console.log(connection);

app.use(cors());
  
app.get('/', (req, res) => {
  res.send('go to /products to see products')
});

//API for select records from MySql products table
app.get('/products', (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }
    else {
      res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
  console.log('Products server listening on port 4000');
});