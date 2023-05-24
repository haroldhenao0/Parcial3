const express = require("express")
require("dotenv").config()
const { dbConnection } = require("./database/config")

const app = express();

dbConnection();

app.use(express.static("public"))

app.use(express.json());

app.use("/api/auth", require("./routes/auth"))
app.use("/api/auth", require("./routes/pedidojs"))

app.listen(process.env.PORT, () => {
    console.log("Express server listening on port", process.env.PORT)
})
