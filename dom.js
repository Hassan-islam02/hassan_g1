// // DOM ---> DOCUMENTS OBJECT MODEL

// let elem = document.getElementById('second');

// elem.textcontent = "AN A APPLE DAY"
// elem.style.background = "yellow"
// elem.style.textAlign = "center"
// elem.classList.add('world')
// elem.className = "hello"
// elem.className.remove('hello');

// elem.classList.add(wow);
// elem.classList.add(great);
// elem.classList.add(yes);

// elem.classList.remove(yes);

// let mydiv = documnet.getElementsByClassName('container');

// mydiv[0].innerHTML = "hello world";
// mydiv[0].style.fontweight = "bold";
// mydiv[0].style.fontsize = "50px";

// mydiv[0].classList.add = ('wow');

// let newelem = document.createElement('p');
// mydiv[0].appendChild(newelem);
// newelem.innerHTML = "HELLO"

// let newbtn = documnet.createElement('button');

// newbtn.innerHTML = "submit";
// newbtn.style.padding = "20px 24px"
// newbtn.className = "btn btn-dark"
// newbtn.style.fontsize = "24ox"

// // EVENT
// newbtn.Eventlistner('click' , togglebtn);
// function togglebtn(){
//     console.log("you Clicked on me!")
//     newbtn.innerHTML = "wow";
// }


// dom -------> document object model

let mart = document.getElementById('second');
console.log(mart);

mart.innerHTML = "an apple a day keeps adoctor away"
mart.textContent = "keep a doctor away an apple a day"
mart.style.backgroundColor= "red"
mart.style.textAlign="center"
mart.style.fontSize="90px"
mart.classList.add('eollo');
mart.className = "yello"
mart.classList.remove('eollo');

let mrtt = document.getElementsByClassName('container');


mrtt[0].innerHTML = "a day keeps doctor away"
mrtt[0].style.backgroundColor= "orange"
mrtt[0].style.textAlign="center"
mrtt[0].style.fontSize="30px"
mrtt[0].style.fontWeight="bold"
mrtt[0].classList.add('wow');

let newMart = document.createElement('h1');
mrtt[0].appendChild(newMart);
newMart.innerHTML="hello"



let newMrtt = document.createElement('p');
newMart.appendChild(newMrtt);
newMrtt.innerHTML="yellow"

let newBtn = document.createElement('button');
Mart[0].appendChild(newBtn);


newBtn.innerHTML= "summit"
newBtn.style.padding= "20px 24px";
newBtn.className = "btn btn-dark"
newBtn.style.fontSize="24px";

//events

newBtn.addEventListener('click' ,toggle);
function toggle(){
    console.log("you click a button");
    newBtn.innerHTML = "wow"
}