//Ejercicio 4
var NuevoElelemto = document.createElement("ul");
NuevoElelemto.innerHTML ='<li>desayunar</li><li>ir al banco</li><li>hacer el mercado</li><li>preparar el almuerzo</li>';

var padre = document.getElementsByTagName("ol")[0].parentNode;
var referencia = document.getElementsByTagName("ol")[0];
padre.replaceChild(NuevoElelemto,referencia);

//Añadir clase
NuevoElelemto.classList.add("mt-5");

//Ejercicio 5

//Asignación de clase CSS
var Title = document.querySelector("h2");
Title.setAttribute("class", "Title");

/*//Eliminación de elemento
//var Elim = document.querySelectorAll("li")[3];
//Elim.remove();*/

//Ejercicio 6
//Crear Item e insertar
let li = document.createElement("li");
li.innerText = "Recoger a los niños";
let Posi = document.querySelectorAll("li")[3];
Posi.after(li);

//Crear clase e insertar

var cumplido1 = document.querySelectorAll("li")[0];
cumplido1.setAttribute("class", "Cumplido");

var cumplido2 = document.querySelectorAll("li")[3];
cumplido2.setAttribute("class", "Cumplido");

var cumplido3 = document.querySelectorAll("li")[4];
cumplido3.setAttribute("class", "Cumplido");

var fallido = document.querySelectorAll("li")[1];
fallido.setAttribute("class", "fallido");

var fallido = document.querySelectorAll("li")[4];
fallido.setAttribute("class", "fallido");












