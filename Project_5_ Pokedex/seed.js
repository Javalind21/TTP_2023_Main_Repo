const { Pokemon } = require("./server/db");

const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon
  const charmander = await Pokemon.create({name: "Charmander", type: "Fire"});
  const bulbasaur = await Pokemon.create({name: "Bulbasaur", type: "Grass"});
  // create some trainers


  
  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};
