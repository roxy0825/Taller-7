//Ejercicio 1
let h1 = document.createElement("h1");
//h1.setAttribute("class","h1");
h1.innerText = "my presentation";
let Pos = document.querySelector("div");
Pos.insertAdjacentElement("beforebegin", h1);

//Ejercicio 2
let p = document.createElement("p");
p.innerText = "my best friend is mickey";
let Ubi = document.querySelector("div");
Ubi.insertAdjacentElement("beforeend", p);

//Ejercicio 3
h1.style.color="blue";
p.innerHTML = '<strong>my best friend is mickey</strong>';
p.style.backgroundColor="green";


