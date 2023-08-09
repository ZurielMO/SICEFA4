async function cargarIndex() {
    let response = await fetch("../index.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarUbicacion() {
    let response = await fetch("ubicacion.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

async function cargarContacto() {
    let response = await fetch("contacto.html");
    let text = await response.text();
    var content = document.getElementById("content");
    content.innerHTML = text;
  }

