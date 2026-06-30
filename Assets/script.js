function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const text = "Aspiring Web Developer | Student | Problem Solver | Gamer";
let i = 0;

function typeEffect(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;