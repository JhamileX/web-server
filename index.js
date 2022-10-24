const express = require("express");
const app = express();
const hbs = require("hbs");
require("dotenv").config();

const port = process.env.PORT;

//servir contenido estatico
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

//si se usa el estatic de arriba, lo de abajo no se ejecuta
app.get("/", function (req, res) {
  console.log("hola");
  //   res.send("Hello World");
  res.render("home", {
    titulo: "curso de node.js",
    name: "jhamilex",
  });
});

app.get("/generic", function (req, res) {
  //   res.sendFile(__dirname + "/public/generic.html");
  res.render("generic", {
    titulo: "curso de node.js",
    name: "jhamilex",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "curso de node.js",
    name: "jhamilex",
  });
});

app.listen(port);
