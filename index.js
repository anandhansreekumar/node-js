// const { add, sub } = require("./add");
// require("./batman");

const superHero = require("./super-hero");

console.log("Hello from index.js");

console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName());
