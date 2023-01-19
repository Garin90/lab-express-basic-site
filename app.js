const express = require ('express');
const hbs = require ('hbs');
const app = express();
const router = require('./config/routes.config');
app.use(router);

const port = 3000;

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");


app.listen(port, () => {
    console.log(`Application running at port: ${port}`)
})





