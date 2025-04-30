const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, resp) =>{
    resp.send("CV");
});
app.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`);
});