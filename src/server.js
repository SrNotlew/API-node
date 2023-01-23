require("dotenv").config()

const express = require('express')
const routes = require("./routes")
const connectToDatabase = require("./database")
const cors = require("cors")

connectToDatabase();

const app = express();
const  door = 3690;

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(PORT, () =>{
    console.log(`⚡ Server running on http://localhost:${process.env.PORT || door}`);
}) 