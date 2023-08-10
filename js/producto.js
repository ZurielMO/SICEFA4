var productos=[];

function crearProductos(){
    let producto1 = {  
    "idProd": 1,
    "nombre_producto": "Paracetamol",
    "forma_farmaceutica": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Alivio del dolor",
    "contradicciones": "Hipersensibilidad al paracetamol",
    "concentracion": "500mg",
    "nombre_generico": "Acetaminofén",
    "unidad_medida": "mg",
    "unidad_envase": "30 unidades",
    "precio_unitario": 30.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '1234567890'
};

let producto2 = {  
    "idProd": 2,
    "nombre_producto": "Ibuprofeno",
    "forma_farmaceutica": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Alivio del dolor",
    "contradicciones": "Asma, úlcera péptica activa",
    "concentracion": "400mg",
    "nombre_generico": "Ibuprofeno",
    "unidad_medida": "mg",
    "unidad_envase": "20 unidades",
    "precio_unitario": 40.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '9876543210'
};

let producto3 = {  
    "idProd": 3,
    "nombre_producto": "Omeprazol",
    "forma_farmaceutica": "Cápsula",
    "presentacion": "Frasco",
    "principal_indicacion": "Acidez gástrica",
    "contradicciones": "Hipersensibilidad al omeprazol",
    "concentracion": "20mg",
    "nombre_generico": "Omeprazol",
    "unidad_medida": "mg",
    "unidad_envase": "60 cápsulas",
    "precio_unitario": 20.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '5432109876'
};

let producto4 = {  
    "idProd": 4,
    "nombre_producto": "Amoxicilina",
    "forma_farmaceutica": "Cápsula",
    "presentacion": "Frasco",
    "principal_indicacion": "Infecciones bacterianas",
    "contradicciones": "Alergia a la penicilina",
    "concentracion": "500mg",
    "nombre_generico": "Amoxicilina",
    "unidad_medida": "mg",
    "unidad_envase": "30 cápsulas",
    "precio_unitario": 50.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '0123456789'
};

let producto5 = {  
    "idProd": 5,
    "nombre_producto": "Loratadina",
    "forma_farmaceutica": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Alivio de la alergia",
    "contradicciones": "Embarazo y lactancia",
    "concentracion": "10mg",
    "nombre_generico": "Loratadina",
    "unidad_medida": "mg",
    "unidad_envase": "24 unidades",
    "precio_unitario": 45.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '7654321098'
};

let producto6 = {  
    "idProd": 6,
    "nombrerod": "Aspirina",
    "forma_far": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Alivio del dolor",
    "contradicciones": "Alergia al ácido acetilsalicílico",
    "concentracion": "500mg",
    "nombre_generico": "Ácido Acetilsalicílico",
    "unidad_medida": "mg",
    "unidad_envase": "20 unidades",
    "precio_unitario": 55.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '1357924680'
};

let producto7 = {  
    "idProd": 7,
    "nombre_producto": "Ciprofloxacino",
    "forma_farmaceutica": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Infecciones bacterianas",
    "contradicciones": "Embarazo y lactancia",
    "concentracion": "500mg",
    "nombre_generico": "Ciprofloxacino",
    "unidad_medida": "mg",
    "unidad_envase": "14 unidades",
    "precio_unitario": 80.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '2468135790'
};

let producto8 = {  
    "idProd": 8,
    "nombre_producto": "Paracetamol Infantil",
    "forma_farmaceutica": "Jarabe",
    "presentacion": "Frasco",
    "principal_indicacion": "Alivio del dolor en niños",
    "contradicciones": "Hipersensibilidad al paracetamol",
    "concentracion": "120mg/5ml",
    "nombre_generico": "Acetaminofén",
    "unidad_medida": "ml",
    "unidad_envase": "100 ml",
    "precio_unitario": 35.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '9876543210'
};

let producto9 = {  
    "idProd": 9,
    "nombre_producto": "Lansoprazol",
    "forma_farmaceutica": "Cápsula",
    "presentacion": "Frasco",
    "principal_indicacion": "Acidez gástrica",
    "contradicciones": "Embarazo y lactancia",
    "concentracion": "30mg",
    "nombre_generico": "Lansoprazol",
    "unidad_medida": "mg",
    "unidad_envase": "28 cápsulas",
    "precio_unitario": 25.00,
    "foto": "ruta_de_la_foto",
    "ruta_foto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codigo_barras": '0123456789'
};

let producto10 = {  
    "idProd": 10,
    "nombre_producto": "Diclofenaco",
    "formaFar": "Tableta",
    "presentacion": "Caja",
    "principal_indicacion": "Alivio del dolor",
    "contradicciones": "Úlcera péptica activa",
    "concentracion": "100mg",
    "nombre_generico": "Diclofenaco",
    "unidad_medida": "mg",
    "unidad_envase": "10 unidades",
    "precio_unitario": 70.00,
    "foto": "ruta_de_la_foto",
    "rutaFoto": "ruta_de_la_ruta_foto",
    "estatus": 1,
    "codBarras": '5432109876'
};
    
    
//    let usuario1={
//      "idUsuario":1,
//      "nombreUsuario":"usuario1",
//       "contraseña":"usuario1",
//        "rol":"EMPS"
//    }; 
//
//let sucursal1={
//    
//        "idSucursal":1,
//    "nombre":"Centro"
//};
//
//let persona1={
//    
//    "idPersona":1,
//    "nombre":"Miguel Angel",
//    "aPaterno":"Lopez",
//    "aMaterno":"Gaeta",
//    "genero":"M",
//    "fechaNacimiento":"12/09/2001",
//    "rfc":"LOGM010912H12",
//    "curp":"LOGM010912HGTGA5",
//    "domicilio":"nenufar 102",
//    "CP":"37000",
//    "ciudad":"Leon",
//    "estado":"Guanajuato",
//    "tel":"47792379",
//    "foto":"foto"
//};
//
//let empleado1={
//    
//     "idEmpleado":1,
//     "codigo":"23011234",
//     "fechaIngreso":"01/01/2023",
//     "puesto":"Atencion a cliente",
//     "salario":10000.00,
//     "activo":1,
//     "persona":persona1,
//     "usuario":usuario1,
//     "sucursal":sucursal1
//};


productos[0]=producto1;
productos[1]=producto2;
productos[2]=producto3;
productos[3]=producto4;
productos[4]=producto5;
productos[5]=producto6;
productos[6]=producto7;
productos[7]=producto8;
productos[8]=producto9;
productos[9]=producto10;
cargarTablaProductos();
}

function cargarTablaProductos(){
    let datosTabla="";
    for(let i=0;i<productos.length;i++){
    
    var activo="";
    if(productos[i].activo == 1)
        activo="Activos";
    else
        activo="Inactivo";
    
        datosTabla+="<tr>";
        
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[i].idProd+"</a></td>";
datosTabla+="<td><i class='fa-solid fa-pills fa-2xl' style='color: #286c7d;'></i></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[i].nombre_generico+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[i].precio_unitario+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarProd("+i+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#ModalEliminar' type='button' onclick='eliminarProd("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";

    datosTabla+="</tr>"; 
    }
    
document.getElementById("tbProductos").innerHTML=datosTabla;   
}


function eliminarProd (i){
 productos.splice(i,1);   
  cargarTablaProductos();
}
function modificarProd (i){
    //Datos producto
    document.getElementById("txtIdProdDos").value=productos[i].idProd;
    document.getElementById("txtNombreProdDos").value=productos[i].nombre_producto;
    document.getElementById("txtFormaFarDos").value=productos[i].forma_farmaceutica;
    document.getElementById("txtPresentacionDos").value=productos[i].presentacion;
    document.getElementById("txtPrincipalIndicacionDos").value=productos[i].principal_indicacion;
    document.getElementById("txtConcentracionDos").value=productos[i].concentracion;
    document.getElementById("txtNombreGenericoDos").value=productos[i].nombre_generico;
    document.getElementById("txtUnidadMedidaDos").value=productos[i].unidad_medida;
    document.getElementById("txtUnidadesEnvaseDos").value=productos[i].unidad_envase;
    document.getElementById("txtContraindicacionesDos").value=productos[i].contradicciones;
    document.getElementById("txtPrecioUnitarioDos").value=productos[i].precio_unitario;
}

function guadarProducto(){
    //Datos producto
    let idP = document.getElementById("txtIdProdDos").value;
    let nomProd = document.getElementById("txtNombreProdDos").value;
    let formFar = document.getElementById("txtFormaFarDos").value;
    let pres = document.getElementById("txtPresentacionDos").value;
    let prinInd = document.getElementById("txtPrincipalIndicacionDos").value;
    let concen = document.getElementById("txtConcentracionDos").value;
    let nomGen= document.getElementById("txtNombreGenericoDos").value;
    let uM = document.getElementById("txtUnidadMedidaDos").value;
   let uE =  document.getElementById("txtUnidadesEnvaseDos").value;
    let cI = document.getElementById("txtContraindicacionesDos").value;
    let pU = document.getElementById("txtPrecioUnitarioDos").value;
   
    let producto1={  
    "idProd": idP,
    "nombre_producto": nomProd,
    "forma_farmaceutica":formFar,
    "presentacion": pres,
    "principal_indicacion": prinInd,
    "concentracion": concen,
    "nombre_generico": nomGen,
    "unidad_medida": uM,
    "unidad_envase": uE,
    "Contradicciones": cI,
    "precio_unitario": pU
    

    };

//modicar
//if(idP !== 0 && idP !== null){
//    productos[i]=producto1;
//}
////Es nuevo
//else{
// let pos = productos.lenght;
// productos[pos]=producto1;    
//}
//cargarTablaProductos();
if (idP != 0)
    {
        let pos;
        for (let i = 0; i < productos.length; i++) {
            if (idP == productos[i].idProd) {
                pos = i;
            }
        }
        productos[pos] = producto1;
    }
    //es nuevo generar ids
    else {
        let id = (productos.length) + 1;
        producto1.idProd = id;
        let pos = productos.length;
        productos[pos] = producto1;
    }

    cargarTablaProductos();
}



function AgregarProducto(){
    //Datos producto
    let idP = document.getElementById("txtIdProd").value;
    let nomProd = document.getElementById("txtNombreProd").value;
    let formFar = document.getElementById("txtFormaFar").value;
    let pres = document.getElementById("txtPresentacion").value;
    let prinInd = document.getElementById("txtPrincipalIndicacion").value;
    let concen = document.getElementById("txtConcentracion").value;
    let nomGen= document.getElementById("txtNombreGenerico").value;
    let uM = document.getElementById("txtUnidadMedida").value;
   let uE =  document.getElementById("txtUnidadesEnvase").value;
    let cI = document.getElementById("txtContraindicaciones").value;
    let pU = document.getElementById("txtPrecioUnitario").value;
   
    let producto1={  
    "idProd": idP,
    "nombre_producto": nomProd,
    "forma_farmaceutica":formFar,
    "presentacion": pres,
    "principal_indicacion": prinInd,
    "concentracion": concen,
    "nombre_generico": nomGen,
    "unidad_medida": uM,
    "unidad_envase": uE,
    "Contradicciones": cI,
    "precio_unitario": pU
    

    };

//modicar
//if(idP !== 0 && idP !== null){
//    productos[i]=producto1;
//}
////Es nuevo
//else{
// let pos = productos.lenght;
// productos[pos]=producto1;    
//}
//cargarTablaProductos();
if (idP != 0)
    {
        let pos;
        for (let i = 0; i < productos.length; i++) {
            if (idP == productos[i].idProd) {
                pos = i;
            }
        }
        productos[pos] = producto1;
    }
    //es nuevo generar ids
    else {
        let id = (productos.length) + 1;
        producto1.idProd = id;
        let pos = productos.length;
        productos[pos] = producto1;
    }

    cargarTablaProductos();
}

function limpiarProd (){
    //Datos producto
    document.getElementById("txtIdProd").value;
    document.getElementById("txtNombreProd").value;
    document.getElementById("txtFormaFar").value;
    document.getElementById("txtPresentacion").value;
    document.getElementById("txtPrincipalIndicacion").value;
    document.getElementById("txtConcentracion").value;
    document.getElementById("txtNombreGenerico").value;
    document.getElementById("txtUnidadMedida").value;
    document.getElementById("txtUnidadesEnvase").value;
    document.getElementById("txtContraindicaciones").value;
    document.getElementById("txtPrecioUnitario").value;
  
}

//function buscarProd(){
//    //tomamos el valor de la busqueda
//    var b = document.getElementById("txtBusquedaProd").value;
//    //Arreglo para colocar los indices de donde se encontraron datos                
//    var incindecias = [];
//    for (var i=0; i<productos.length;i++){
//        if(productos[i].idProd == b || 
//          productos[i].nombreGenerico == b || 
//          productos[i].precioUnitario == b
//          )
//  {
//            //Se toma el tamaño del arreglo de incidencias
//            var pos=incindecias.length;
//            //En esa posicion se agrega el indice del arreglo de Empleados donde se encuentrar el valor
//          incindecias[pos]=i; 
//        }
//    }
//    
//     let datosTabla="";
//     //Si hay datos que coincide e la busqueda se genera la tabla de resultados
//     if(incindecias.length>0){
//    for(let i=0;i<productos.length;i++){
//        
////    var estatus="";
////    if(productos[incindecias[i]].estatus == 1)
////        estatus="Activos";
////    else
////        estatus="Inactivo";
////    
////        datosTabla+="<tr>";
//        
//datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[incindecias[i]].idProducto+"</a></td>";
//datosTabla+="<td><i class='fa-solid fa-pills fa-2xl' style='color: #286c7d;'></i></td>";
//datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[incindecias[i]].nombreGenerico+"</a></td>";
//datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[incindecias[i]].precioUnitario+"</a></td>";
//datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
//datosTabla+="<td><button class='botonessincontorno' type='button' onclick='modificarProd("+incindecias[i]+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarProd("+incindecias[i]+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
//
//    datosTabla+="</tr>"; 
//    }
//    
// 
//     }
//     else{
//         datosTabla="<tr><td colspan='5'>No hay incidencias del la busqueda</td></tr>";
//     }
//    document.getElementById("tbProductos").innerHTML=datosTabla;  
//}

function buscarProd() {
    // Tomamos el valor de la búsqueda
    var b = document.getElementById("txtBusquedaProd").value;
    // Arreglo para colocar los índices de donde se encontraron datos                
    var incidencias = [];

    for (var i = 0; i < productos.length; i++) {
        // Recorremos todos los campos de cada producto y comparamos con la búsqueda
        for (var prop in productos[i]) {
            if (productos[i][prop].toString().toLowerCase().includes(b.toLowerCase())) {
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
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + productos[incidencias[i]].idProd + "</a></td>";
            datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + productos[incidencias[i]].nombre_generico + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + productos[incidencias[i]].precio_unitario + "</a></td>";
            datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
            datosTabla += "<td><button class='botonessincontorno' type='button' onclick='modificarProd(" + incidencias[i] + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarProd(" + incidencias[i] + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbProductos").innerHTML = datosTabla;
}

