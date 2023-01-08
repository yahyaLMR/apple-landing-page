"use strict";
let choose = function (id) {
    let body = document.querySelector('body')
    let display = document.getElementById('displayphone')
    let theone = document.getElementById(id)
    display.src = theone.src
    if(id == "gold"){
    body.style.background = "black"
    } else if(id == "blue"){
        body.style.background = "blue"
        } else if(id == "black"){
            body.style.background = "gray"
            }if(id == "beige"){
                body.style.background = "#F94"
                } else if(id == "red"){
                    body.style.background = "#f77"
                    } 
}