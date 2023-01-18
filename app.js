const express = require ('express');
const hbs = require ('hbs');
const app = express();

const port = 3000;

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");


app.listen(port, () => {
    console.log(`Application running at port: ${port}`)
})

app.get('/', (req, res, next) => {
    console.log("I'm in home");
    res.render("home");
})

app.get('/about', (req, res, next) => {
    console.log("I'm in about");
    res.render("about");
})

app.get('/works', (req, res, next) => {
    console.log("I'm in works");
    res.render("works");
})

app.get('/gallery', (req,res,next) => {
    console.log("I'm in gallery");
    res.render("gallery");
})




