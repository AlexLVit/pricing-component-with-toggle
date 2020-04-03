let toggle = document.querySelector("input");
let isActive = false;

let month = document.getElementsByClassName("price__month");
let year = document.getElementsByClassName("price__year");

function changePrices (){
    if(!isActive){
        month[0].style.display ="none";
        month[1].style.display ="none";
        month[2].style.display ="none";
       
        year[0].style.display="block";
        year[1].style.display="block";
        year[2].style.display="block";
        isActive=true;
    }
    else if (isActive){
        month[0].style.display ="block";
        month[1].style.display ="block";
        month[2].style.display ="block";
       
        year[0].style.display="none";
        year[1].style.display="none";
        year[2].style.display="none";
        isActive=false;
    }
}
