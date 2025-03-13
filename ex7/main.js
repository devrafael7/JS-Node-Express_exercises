const express = require("express");
const app = express();

let ipCount = 2;

app.get("/get-ip", (req, res) => {
    const ip = `192.168.1.${ipCount++}`;
    res.send({ip});
});

app.listen(3000, ()=> console.log("DHCP Server running at http://localhost:3000/get-ip"))