const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const { Pokemon, Trainer } = require("./db");
const app = express();
module.exports = app;

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "css")
  )
);
app.use(
  "/fonts",
  express.static(
    path.join(__dirname, "..", "node_modules", "font-awesome", "fonts")
  )
);

app.use("/api", require("./api"));

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.get("/Pokemon", async (req, res, next) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.send(pokemons);
  } catch (err) {
    next(err);
  }
});



app.get("/Pokemon/:id", async (req, res, next) => {
  try {
    const Pokemon = await Pokemon.findOne({
      where: { id: req.params.id },
      include: Trainer,
    });

    console.log(Pokemon);

    res.send(Pokemon);
  } catch (err) {
    next(err);
  }
});




// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
