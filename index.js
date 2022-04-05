require("dotenv").config();
const express = require("express");
const compression = require('compression')
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const port = process.env.PORT;
const apiKey = process.env.APIKEY;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(compression());
app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=10`)
    .then((response) => response.json())
    .then((data) => {
      res.render("home", {
        pageTitle: "Rijksmuseum",
        data: data.artObjects,
      });
    })
    .catch((err) => res.send(err));
});


app.get("/detail/:id", function (req, res) {
  console.log(req.params.id);
  fetch(
    `https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${apiKey}`
  )
    .then(async (response) => {
      const artWorks = await response.json();
      res.render("detail", {
        pageTitle: "Art" + req.params.id,
        data: artWorks.artObject,
      });
      console.log(artWorks.artObject);
    })
    .catch((err) => res.send(err));
});

app.get("/offline", (req, res) => {
  res.render("offline", {
    pageTitle: "offline",
  });
});


app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});