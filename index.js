require("dotenv").config();
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=OoTZzgc6&ps=10`)
    .then((response) => response.json())
    .then((data) => {
      res.render("home", {
        pageTitle: "Rijksmuseum",
        data: data.artObjects,
      });
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});