import express from "express";
import axios from "axios";
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";


const app = express();
const port = 3000;


app.use(express.static("public"));

app.listen(port, ()=>{
    console.log("Server is listening on port "+port);
});



app.get("/", (req,res)=>{
    res.render("index.ejs")
});

app.get("/search", async (req,res)=>{
    try {
        const response = await axios(url + req.query.input);
        res.render("index.ejs", {data: response.data[0]});
    } catch (error) {
        res.render("index.ejs", {error: "word not found"});
    }
});


