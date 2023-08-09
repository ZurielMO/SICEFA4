async function cargarDetalles() {
    let response = await fetch("html/detallesProducto.html"); //Realizar la peticoa
    let text = await response.text(); //Leer cuerpo ña respuesta como
    document.getElementById("contentDetalle").innerHTML=text;
}

