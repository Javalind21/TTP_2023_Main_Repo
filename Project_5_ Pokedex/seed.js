const { Pokemon } = require("./server/db");

const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon
  await Pokemon.create({name: "Charmader"})
  // create some trainers

  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};
