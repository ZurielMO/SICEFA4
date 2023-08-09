
async function cargarInicio() {
    let response = await fetch("html/inicio.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarNosotros() {
    let response = await fetch("html/nosotros.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarInicioSesionSucursal() {
    let response = await fetch("html/inicio_Sesion_Sucursal.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarInicioSesionCentral() {
    let response = await fetch("html/inicio_Sesion_Central.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }


  