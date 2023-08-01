const router = require("express").Router();
const { db, Pokemon, Trainer } = require("../db");

// Connect your API routes here!
router.get("/Pokemon", async (req, res, next) => {
    try {
      const pokemon = await Pokemon.findAll();
      res.send(pokemon);
    } catch (err) {
      next(err);
    }
  });

  router.get("/Pokemon/:id", async (req, res, next) => {
    try {
      const pokemon = await Pokemon.findOne({
        where: { id: req.params.id },
        include: Trainer,
      });
  
      console.log(pokemon);
  
      res.send(pokemon);
    } catch (err) {
      next(err);
    }
  });

  router.get("/Trainer", async (req, res, next) => {
    try {
      const trainer = await Trainer.findAll();
      res.send(trainer);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/Trainer/:id", async (req, res, next) => {
    try {
      const trainer = await trainer.findByPk(req.params.id);
      res.send(trainer);
    } catch (err) {
      next(err);
    }
  });
  
  

module.exports = router;
