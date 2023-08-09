async function cargarIndex() {
    let response = await fetch("../index.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarPersonales() {
    let response = await fetch("formularios_empleados/personales.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarUbicacion() {
    let response = await fetch("formularios_empleados/ubicacion.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarContacto() {
    let response = await fetch("formularios_empleados/contacto.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }
