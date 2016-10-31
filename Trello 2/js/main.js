window.addEventListener("load", function() {
  var notaUno = document.getElementById("inicial");
  var notaDos = document.getElementById("nota");
  var boton = document.getElementById("boton");
  var fondo = document.getElementById("fondo");
  

  notaUno.addEventListener("click", function(){
    mostrarInput();

    notaUno.style.display = "none";

    });

//Botón guardar
  boton.addEventListener("click", function(e) {
    e.preventDefault();
    agregarTitulo(notaDos, this);
    fondo.style.display = "none";
    agregarDiv();
  });

  function mostrarInput(){
    fondo.style.display ="block";
  }

//Agregar tarjeta
  function agregarTitulo(notaDos, notaUno){
    var div = document.createElement("div");
    var btn = document.createElement("button");

    div.classList.add("tituloList");
    btn.classList.add("agregarTar");


    div.innerHTML = notaDos.value;
    btn.textContent = "Añadir una tarjeta...";

    var insertar = notaUno.parentElement.parentElement;
    insertar.insertBefore(btn, insertar.childNodes[0]);
    insertar.insertBefore(div, insertar.childNodes[0]);
    notaDos.value="";
  }


  function agregarDiv(){
    var newNota = document.createElement("div");
    contenedor.appendChild(newNota);
    newNota.classList.add("newNota");

    newNota.insertBefore(notaUno, newNota.childNodes[0]);
    newNota.insertBefore(fondo, newNota.childNodes[1]);

    notaUno.classList.add("inicial");
    notaUno.style.display = "block";

    
  }
});


/*
function drag(ev) {
  //console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var z = document.getElementById(data);
    //console.log(ev.target.tagName);
    if(ev.target.tagName === 'DIV'){
      ev.target.insertBefore(z,ev.target.lastChild);
    }
    
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragChange(ev){
  ev.target.style.background = /*...; 
} 

*/

