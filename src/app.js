const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");



app.set('view engine', 'hbs');
app.set('views',template_Path)
app.use(express.static(staticPath));
hbs.registerPartials(partials_Path)

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("*", (req,res)=>{
    res.render("404err", {
        errmsg: "404 error "
    })
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})