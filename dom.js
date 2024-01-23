// DOM ---> DOCUMENTS OBJECT MODEL

let elem = document.getElementById('second');

elem.textcontent = "AN A APPLE DAY"
elem.style.background = "yellow"
elem.style.textAlign = "center"
elem.classList.add('world')
elem.className = "hello"
elem.className.remove('hello');

elem.classList.add(wow);
elem.classList.add(great);
elem.classList.add(yes);

elem.classList.remove(yes);

let mydiv = documnet.getElementsByClassName('container');

mydiv[0].innerHTML = "hello world";
mydiv[0].style.fontweight = "bold";
mydiv[0].style.fontsize = "50px";

mydiv[0].classList.add = ('wow');

let newelem = document.createElement('p');
mydiv[0].appendChild(newelem);
newelem.innerHTML = "HELLO"

let newbtn = documnet.createElement('button');

newbtn.innerHTML = "submit";
newbtn.style.padding = "20px 24px"
newbtn.className = "btn btn-dark"
newbtn.style.fontsize = "24ox"

// EVENT
newbtn.Eventlistner('click' , togglebtn);
function togglebtn(){
    console.log("you Clicked on me!")
    newbtn.innerHTML = "wow";
}