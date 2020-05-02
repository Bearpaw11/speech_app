const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
<<<<<<< HEAD
        password: "",
=======
        password: "Bearpaw11",
>>>>>>> 8a95d36f5f7bd383a08056cebec1c855bd3bc889
        database: "speechapp"
        
    });
}
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection
