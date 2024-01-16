//loops

// for loop

for (let z=0 ; z<=10 ; z++){
    console.log("pjs" ,z);
}

// string interpulation
for (let z=0 ; z<=10 ; z++){
console.log(`the value of z is ${z}`);

}

//task

let num = prompt("enter number");

for (let t=1 ; t<=10 ; t++){
console.log(`${num} x ${t} = ${num*t}` );

}

// while loop 

let myNum =13;
while(myNum<=36){
console.log("this is while loop" , myNum);
myNum++;
}

//do while
let a =24;
do {
console.log("this is do while  loop " , a);
a++;
} while (a<=56);


//game

// let gameNum = 56;
// let userNum = prompt("enter value to win");
// while(userNum != gameNum){
//     userNum = prompt("you guess wrog number! guess again")
// }


// swal("you win the game!")

//program 

let f = prompt("enter number for even / odd");

for(let i=0 ; i<=f ; i++){
if(i%2==0){
   console.log(`${i} is even`);
}else{
   console.log(`${i} is odd`);

}

}