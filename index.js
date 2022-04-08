require("dotenv").config();
const express = require("express");
const compression = require('compression');
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const port = process.env.PORT;
const apiKey = process.env.APIKEY;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(compression());
app.use(express.static("public"));


// Get all art items with the max of 10 items (performance reasons)
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

// get specific info of 1 art item and display on page
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


// get offline page if user hasn't cached the page yet
app.get("/offline", (req, res) => {
  res.render("offline", {
    pageTitle: "offline",
  });
});


app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
