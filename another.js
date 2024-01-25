let elem = document.getElementsByClassName('container')
elem[0].innerHTML = "Hello World";
elem[0].style.background = "orange";
elem[0].style.height = "400px";
elem[0].style.textAlign = "center";
elem[0].style.fontsize = "40 px";

let newBtn = document.createElement('button');

elem[0].appendChild(newBtn);
newBtn.innerHTML = "click here";
newBtn.className = "btn btn-dark";
newBtn.style.display = "block";
newBtn.style.fontSize = "24px";
newBtn.style.letterSpacing = "14px";
newBtn.style.margin = "0px auto";

newBtn.addEventListener('click', pencil )
    function pencil (){
        console.log("the button is clicked!");
        newBtn.textContent = "WOW !"
    }
let newinp = document.createElement('input');
newinp.className = "from-control mt-3"; 
elem[0].appendChild(newinp);

    newinp.addEventListener('keyup' , myFun);
    function myFun(){
        console.log("FUNCTION IMPLEMENT ON INPUT FILED")
    }