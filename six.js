let fruits = ["apple","mango","dates","orange","pine apple","kiwi","cherry"]
console.log(fruits);

console.log(fruits.slice(1,2))
console.log(fruits);

console.log(fruits.splice(3,1, "lychee" , "banana"));
console.log(fruits);

let bbq = ["tikka","seekh kabab","charga","malai boti"];
let seafood = ["fish","prawns","lobster"]
let sweetdish = ["custuard","ice cream","gulab jaman","halwa"]

let menu = bbq.concat(seafood, sweetdish);
console.log(menu)