require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
/*const session = require("express-session");
const bodyParser = require("body-parser");*/
const routes = require("./src/routes/routes");
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
/*app.use(session({secret: 'user157'}));
app.use(bodyParser.urlencoded({extended:true}));*/
app.use(routes);


app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
