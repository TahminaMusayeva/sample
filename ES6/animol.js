import { Animal } from "./main";

let cat = new Animal("cat", 4);

console.log(cat.type);
cat.makeNoise("Meow");
cat.makeLick("lick");

const cat5Legs = Animal.buildCat();
