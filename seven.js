//turnary operation

// let grade = prompt("enter your grade in capital letter");

// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "pass" : "fail";
// console.log(result);

//OTHER LOGIC MAKE IN INTEGER BY DEFULT STRING AND TYPE CHECK

let grade = prompt("enter your grade in capital letter");
let per = prompt("enter your percentage");


let result =  per === 90  && grade == "A"  ||  per === 80  && grade == "B" || per === 70  && grade == "C" || per === 60  && grade == "D" ? "pass" : "pass";
console.log(result);