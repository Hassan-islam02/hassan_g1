let myData = {
    name : "peter",
    city : "karachi",
    age : 54,
    salary : 1000,
    grade : "c"
};

console.log(myData["city"]);
console.log(myData["age"]);

console.log(myData.salary);
console.log(myData.grade);
console.log(myData);

for (let i in myData){
    console.log(i, myData [i]);
};

let a = 45;
let b = 75;

console.log("the sum of a+b is : ", a+b );
console.log("the sum of a-b is : ", a-b );
console.log("the sum of a+b is : ", a*b );
console.log("the sum of a/b is : ", a/b );
console.log("the sum of a%b is : ", a%b );

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("end operator");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(!false && !false);