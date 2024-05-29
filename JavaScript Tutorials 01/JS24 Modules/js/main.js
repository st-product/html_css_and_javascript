// Modules

//import PlayGuitar from "./guitars.js";
//import { Shredding as shred, Plucking as plug} from "./guitars.js";
//console.log(PlayGuitar());
//console.log(shred());
//console.log(plug());

import * as Guitars from "./guitars.js";

console.log(Guitars.PlayGuitar());
console.log(Guitars.Shredding());
console.log(Guitars.Plucking());

import User from "./user.js";

const me = new User("email@email.com", "Dave");
console.log(me); 
console.log(me.greetings());