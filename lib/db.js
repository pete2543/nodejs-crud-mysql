//เชื่อมฐานข้อมูล
let mysql = require('mysql');
let connection = mysql.createConnection({
    //host: "node32005-productover.app.ruk-com.cloud",
    host: "localhost",
    user: "root",
    //password: "QNNdls88677",
    password: "",
    database: "nodejs_crud_db"
})

connection.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected...');
    }
})

module.exports = connection;

