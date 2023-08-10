var ventas=[];

function crearVenta(){

let cliente1={
    
        "idClientel":1,
    "codigo":"22002324"
};


let empleado1={
    
     "idEmpleado":1,
     "codigo":"23011234"
};

let cliente2 = {
    "idCliente": 2,
    "codigo": "22004567"
};

let empleado2 = {
    "idEmpleado": 2,
    "codigo": "23015678"
};

let cliente3 = {
    "idCliente": 3,
    "codigo": "22007890"
};

let empleado3 = {
    "idEmpleado": 3,
    "codigo": "23018901"
};
let cliente4 = {
    "idCliente": 4,
    "codigo": "22023456"
};

let empleado4 = {
    "idEmpleado": 4,
    "codigo": "23024567"
};
let cliente5 = {
    "idCliente": 5,
    "codigo": "22034567"
};

let empleado5 = {
    "idEmpleado": 5,
    "codigo": "23035678"
};
let producto1={
    
     "idProd":1,
     "nomProd":"Paracetamol",
     "precioUnitario":"10.50"
};
let producto2={
    
     "idProd":2,
     "nomProd":"Ibuprofeno",
     "precioUnitario":"12.75"
};
let producto3={
    
     "idProd":3,
     "nomProd":"Omeprazol",
     "precioUnitario":"8.90"
};
let producto4={
    
     "idProd":4,
     "nomProd":"Amoxicilina",
     "precioUnitario":"15.20"
};
let producto5={
    
     "idProd":5,
     "nomProd":"Loratadina",
     "precioUnitario":"9.75"
};

let venta1={
    
     "idVenta":1,
     "fechaIngreso":"01/01/2023",
     "horaIngreso":"10:15",
     "cantidad":"2",
     "producto":producto1,
     "empleado":empleado1,
     "cliente":cliente1
};
let venta2 = {
    "idVenta": 2,
    "fechaIngreso": "02/02/2023",
    "horaIngreso": "14:30",
    "cantidad": "3",
    "producto": producto2,
    "empleado": empleado2,
    "cliente": cliente2
};
let venta3 = {
    "idVenta": 3,
    "fechaIngreso": "03/03/2023",
    "horaIngreso": "16:45",
    "cantidad": "1",
    "producto": producto3,
    "empleado": empleado3,
    "cliente": cliente3
};
let venta4 = {
    "idVenta": 4,
    "fechaIngreso": "04/04/2023",
    "horaIngreso": "09:00",
    "cantidad": "5",
    "producto": producto4,
    "empleado": empleado4,
    "cliente": cliente4
};
let venta5 = {
    "idVenta": 5,
    "fechaIngreso": "05/05/2023",
    "horaIngreso": "11:20",
    "cantidad": "2",
    "producto": producto5,
    "empleado": empleado5,
    "cliente": cliente5
};



ventas[0]=venta1;
ventas[1]=venta2;
ventas[2]=venta3;
ventas[3]=venta4;
ventas[4]=venta5;
cargarTablaVenta();
}

function cargarTablaVenta(){
    let datosTabla="";
    for(let i=0;i<ventas.length;i++){
     let datosProducto=ventas[i].producto.nomProd+
    " "+ventas[i].producto.precioUnitario;
    
        datosTabla+="<tr>";
        
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[i].idVenta+"</a></td>";
datosTabla+="<td><i class='fa-solid fa-cart-shopping fa-2xl' style='color: #286c7d;'></i></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[i].producto.nomProd+"</a></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[i].producto.precioUnitario+"</a></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[i].cantidad+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarVenta("+i+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#ModalEliminar' onclick='eliminarVenta("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
    datosTabla+="</tr>"; 
    }
    
document.getElementById("tbVentas").innerHTML=datosTabla;   
}


function eliminarVenta (i){
 ventas.splice(i,1);   
  cargarTablaVenta();  
}
function modificarVenta (i){
    //Datos venta
    document.getElementById("txtIdVenta2").value=ventas[i].idVenta;
    document.getElementById("txtCodEmp2").value=ventas[i].empleado.codigo;
    document.getElementById("txtCodCliente2").value=ventas[i].cliente.codigo;
    document.getElementById("txtFecha2").value=ventas[i].fechaIngreso;
    document.getElementById("txtHora2").value=ventas[i].horaIngreso;

  //Datos del producto
    document.getElementById("txtCantidad2").value=ventas[i].cantidad;
  document.getElementById("txtnomProd2").value=ventas[i].producto.nomProd;
  document.getElementById("txtPrecioUnitario2").value=ventas[i].producto.precioUnitario;
  
  
}

function guadarVenta(){
    //Datos venta
    let idV = document.getElementById("txtIdVenta2").value;
    let coE = document.getElementById("txtCodEmp2").value;
    let coC = document.getElementById("txtCodCliente2").value;
    let fec = document.getElementById("txtFecha2").value;
    let hor = document.getElementById("txtHora2").value;
      //Datos del producto
    let cat = document.getElementById("txtCantidad2").value;
    let npr = document.getElementById("txtnomProd2").value;
    let pru = document.getElementById("txtPrecioUnitario2").value;
    
   let cliente1={
    
        "idClientel":1,
    "codigo":coE
};


let empleado1={
    
     "idEmpleado":1,
     "codigo":coC
};
let producto1={
    
     "idProd":1,
     "nomProd":npr,
     "precioUnitario":pru
};

let venta1={
    
     "idVenta":idV,
     "fechaIngreso":fec,
     "horaIngreso":hor,
     "cantidad":cat,
     "producto":producto1,
     "empleado":empleado1,
     "cliente":cliente1
};
    
if (idV != 0)
    {
        let pos;
        for (let i = 0; i < ventas.length; i++) {
            if (idV == ventas[i].idVenta) {
                pos = i;
            }
        }
        ventas[pos] = venta1;
    }
    //es nuevo generar ids
    else {
        let id = (ventas.length) + 1;
        venta1.idVenta = id;
        let pos = ventas.length;
        ventas[pos] = venta1;
    }

    cargarTablaVenta();
}

function limpiarVenta (){
    //Datos venta
document.getElementById("txtIdVenta").value="";
document.getElementById("txtCodEmp").value="";
document.getElementById("txtCodCliente").value="";
document.getElementById("txtFecha").value="";
document.getElementById("txtHora").value="";
  //Datos del producto
document.getElementById("txtCantidad").value="";
document.getElementById("txtnomProd").value="";
document.getElementById("txtPrecioUnitario").value="";

    
  
}

function buscarVenta() {
    // Tomamos el valor de la búsqueda
    var b = document.getElementById("txtBusquedaVenta").value;
    // Arreglo para colocar los índices de donde se encontraron datos                
    var incidencias = [];

    for (var i = 0; i < ventas.length; i++) {
        // Recorremos todos los campos de cada producto y comparamos con la búsqueda
        for (var prop in ventas[i]) {
            if (ventas[i][prop].toString().toLowerCase().includes(b.toLowerCase())) {
                // Se toma el tamaño del arreglo de incidencias
                var pos = incidencias.length;
                // En esa posición se agrega el índice del arreglo de productos donde se encuentra el valor
                incidencias[pos] = i;
                break; // Salimos del loop para evitar duplicados
            }
        }
    }

    let datosTabla = "";

    if (incidencias.length > 0) {
        for (let i = 0; i < incidencias.length; i++) {
            datosTabla += "<tr>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].idVenta+"</a></td>";
datosTabla+="<td><i class='fa-solid fa-cart-shopping fa-2xl' style='color: #286c7d;'></i></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].producto.nomProd+"</a></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].producto.precioUnitario+"</a></td>";
datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].cantidad+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarVenta("+incindecias[i]+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarVenta("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbVentas").innerHTML = datosTabla;
}



//function buscarVenta(){
//    //tomamos el valor de la busqueda
//    var b= document.getElementById("txtBusquedaVenta").value;
//    //Arreglo para colocar los indices de donde se encontraron datos                
//    var incindecias = [];
//    for (var i=0; i<ventas.length;i++){
//        if(ventas[i].idVenta == b || 
//          ventas[i].cantidad == b || 
//          ventas[i].producto.nomProd==b || 
//          ventas[i].producto.precioUnitario==b 
//          )
//  {
//            //Se toma el tamaño del arreglo de incidencias
//            var pos=incindecias.length;
//            //En esa posicion se agrega el indice del arreglo de Empleados donde se encuentrael valor
//          incindecias[pos]=1; 
//        }
//    }
//    
//     let datosTabla="";
//     //Si hay datos que coincide e la busqueda se genera la tabla de resultados
//     if(incindecias.length>0){
//         for(let i=0;i<ventas.length;i++){   
//       datosTabla+="<tr>";
//        
//datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].idVenta+"</a></td>";
//datosTabla+="<td><i class='fa-solid fa-cart-shopping fa-2xl' style='color: #286c7d;'></i></td>";
//datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].producto.nomProd+"</a></td>";
//datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].producto.precioUnitario+"</a></td>";
//datosTabla+="<td> <a class='nav-link' href='#' style='color: black;'>"+ventas[incindecias[i]].cantidad+"</a></td>";
//datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
//datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarVenta("+incindecias[i]+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarVenta("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
//            datosTabla+="</tr>"; 
//     }
// 
//     }
//     else{
//         datosTabla="<tr><td colspan='5'>No hay incidencias del la busqueda</td></tr>";
//     }
//    document.getElementById("tbVentas").innerHTML=datosTabla;  
//}

    
   function agregarVenta(){
    //Datos venta
    let idV = document.getElementById("txtIdVenta").value;
    let coE = document.getElementById("txtCodEmp").value;
    let coC = document.getElementById("txtCodCliente").value;
    let fec = document.getElementById("txtFecha").value;
    let hor = document.getElementById("txtHora").value;
      //Datos del producto
    let cat = document.getElementById("txtCantidad").value;
    let npr = document.getElementById("txtnomProd").value;
    let pru = document.getElementById("txtPrecioUnitario").value;
    
   let cliente1={
    
        "idClientel":1,
    "codigo":coE
};


let empleado1={
    
     "idEmpleado":1,
     "codigo":coC
};
let producto1={
    
     "idProd":1,
     "nomProd":npr,
     "precioUnitario":pru
};

let venta1={
    
     "idVenta":idV,
     "fechaIngreso":fec,
     "horaIngreso":hor,
     "cantidad":cat,
     "producto":producto1,
     "empleado":empleado1,
     "cliente":cliente1
};
    
if (idV != 0)
    {
        let pos;
        for (let i = 0; i < ventas.length; i++) {
            if (idV == ventas[i].idVenta) {
                pos = i;
            }
        }
        ventas[pos] = venta1;
    }
    //es nuevo generar ids
    else {
        let id = (ventas.length) + 1;
        venta1.idVenta = id;
        let pos = ventas.length;
        ventas[pos] = venta1;
    }
limpiarVenta();
    cargarTablaVenta();
    
}



