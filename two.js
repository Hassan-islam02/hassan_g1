let age = 10;

if (age>=20){
    console.log("you can cast your vote!");
}if(age<=20){
    console.log("you can't cast your voe!");
}

if(age>=20){
    console.log("you can cast your vote!");
}else{
    console.log("you cant't cast your vote!");
}

let mode = prompt(`Enter YOur mode
1) dark
2) light`);
let color;

if(mode === "dark"){
    color = "black";
}if(mode === "light"){
    color = "white";
}
console.log("you chose the color" , color);