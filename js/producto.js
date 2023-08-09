var productos=[];

function crearProductos(){
    let producto1={  
    "idProd": 1,
    "nombreProd": "Paracetamol",
    "formaFar":"solidas",
    "presentacion": "Tabletas",
    "principalIndicacion": "Alivio del dolor y fiebre",
    "concentracion": "500 mg",
    "nombreGenerico": "Paracetamol",
    "unidadMedida": "mg",
    "unidadEnvase": "30 tabletas",
    "contradicciones": "No usar en caso de alergia al paracetamol",
    "precioUnitario": 10.50,
    "estatus":"Activo",
    "codBarras":289192834932,
    "foto":"",
    "rutaFoto":""

    };
    let producto2={  
    "idProd": 2,
    "nombreProd": "Ibuprofeno",
    "presentacion": "Cápsulas",
    "formaFar":"solidas",
    "principalIndicacion": "Reducción de inflamación y dolor",
    "concentracion": "200 mg",
    "nombreGenerico": "Ibuprofeno",
    "unidadMedida": "mg",
    "unidadEnvase": "20 cápsulas",
    "contradicciones": "No usar junto con otros antiinflamatorios",
    "precioUnitario": 12.75,
    "estatus":"Activo",
    "codBarras":927935487123,
    "foto":"",
    "rutaFoto":""
    };
    let producto3={
    "idProd": 3,
    "nombreProd": "Omeprazol",
    "formaFar":"solidas",
    "presentacion": "Tabletas",
    "principalIndicacion": "Reducción de la acidez estomacal",
    "concentracion": "20 mg",
    "nombreGenerico": "Omeprazol",
    "unidadMedida": "mg",
    "unidadEnvase": "14 tabletas",
    "contradicciones": "No usar en caso de alergia al omeprazol",
    "precioUnitario": 8.90,
    "estatus":"Activo",
    "codBarras":904765345812,
    "foto":"",
    "rutaFoto":""
    };
    let producto4={
    "idProd": 4,
    "nombreProd": "Amoxicilina",
    "formaFar":"solidas",
    "presentacion": "Suspensión",
    "principalIndicacion": "Tratamiento de infecciones bacterianas",
    "concentracion": "250 mg/5 ml",
    "nombreGenerico": "Amoxicilina",
    "unidadMedida": "mg/5 ml",
    "unidadEnvase": "100 ml",
    "contradicciones": "Consultar con el médico en caso de alergias",
    "precioUnitario": 15.20,
    "estatus":"Activo",
    "codBarras":135287456932,
    "foto":"",
    "rutaFoto":""
    };
    let producto5={
    "idProd": 5,
    "nombreProd": "Loratadina",
    "formaFar":"solidas",
    "presentacion": "Tabletas",
    "principalIndicacion": "Alivio de la alergia",
    "concentracion": "10 mg",
    "nombreGenerico": "Loratadina",
    "unidadMedida": "mg",
    "unidadEnvase": "30 tabletas",
    "Contradicciones": "No recomendado en embarazo",
    "precioUnitario": 9.75,
    "estatus":"Activo",
    "codBarras":923734571298,
    "foto":"",
    "rutaFoto":""
    };
    let producto6={
    "idProd": 6,
    "nombreProd": "Cetirizina",
    "formaFar":"solidas",
    "presentacion": "Jarabe",
    "principalIndicacion": "Alivio de síntomas alérgicos",
    "concentracion": "5 mg/5 ml",
    "nombreGenerico": "Cetirizina",
    "unidadMedida": "mg/5 ml",
    "unidadEnvase": "120 ml",
    "contradicciones": "Consultar con el médico si se están tomando otros medicamentos",
    "precioUnitario": 11.50,
    "estatus":"Activo",
    "codBarras":784732154368,
    "foto":"",
    "rutaFoto":""
    };
    let producto7={
    "idProd": 7,
    "nombreProd": "Aspirina",
    "formaFar":"solidas",
    "presentacion": "Tabletas",
    "principalIndicacion": "Alivio del dolor y fiebre",
    "concentracion": "500 mg",
    "nombreGenerico": "Ácido acetilsalicílico",
    "unidadMedida": "mg",
    "unidadEnvase": "40 tabletas",
    "contradicciones": "Evitar en caso de úlceras estomacales",
    "precioUnitario": 7.20,
    "estatus":"Activo",
    "codBarras":923828341234,
    "foto":"",
    "rutaFoto":""
    };
    let producto8={
    "idProd": 8,
    "nombreProd": "Vitamina C",
    "formaFar":"solidas",
    "presentacion": "Tabletas efervescentes",
    "principalIndicacion": "Suplemento de vitamina C",
    "concentracion": "1000 mg",
    "nombreGenerico": "Ácido ascórbico",
    "unidadMedida": "mg",
    "unidadEnvase": "20 tabletas",
    "contradicciones": "Evitar en caso de cálculos renales",
    "precioUnitario": 6.90,
    "estatus":"Activo",
    "codBarras":984331188231,
    "foto":"",
    "rutaFoto":""
    };
    let producto9={
    "idProd": 9,
    "nombreProd": "Diclofenaco",
    "formaFar":"solidas",
    "presentacion": "Gel",
    "principalIndicacion": "Alivio tópico de dolor e inflamación",
    "concentracion": "1%",
    "nombreGenerico": "Diclofenaco sódico",
    "unidadMedida": "%",
    "unidadEnvase": "30 g",
    "contradicciones": "No aplicar en piel irritada",
    "precioUnitario": 14.50,
    "estatus":"Activo",
    "codBarras":948739120932,
    "foto":"",
    "rutaFoto":""
    };
    let producto10={
    "idProd": 10,
    "nombreProd": "Salbutamol",
    "formaFar":"solidas",
    "presentacion": "Inhalador",
    "principalIndicacion": "Alivio de síntomas asmáticos",
    "concentracion": "100 mcg",
    "nombreGenerico": "Salbutamol",
    "unidadMedida": "mcg",
    "unidadEnvase": "1 inhalador",
    "contradicciones": "No usar en exceso, consultar al médico",
    "precioUnitario": 22.00,
    "estatus":"Activo",
    "codBarras":563822987450,
    "foto":"",
    "rutaFoto":""
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
datosTabla+="<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[i].nombreGenerico+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+productos[i].precioUnitario+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarProd("+i+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarProd("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";

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
    document.getElementById("txtNombreProdDos").value=productos[i].nombreProd;
    document.getElementById("txtFormaFarDos").value=productos[i].formaFar;
    document.getElementById("txtPresentacionDos").value=productos[i].presentacion;
    document.getElementById("txtPrincipalIndicacionDos").value=productos[i].principalIndicacion;
    document.getElementById("txtConcentracionDos").value=productos[i].concentracion;
    document.getElementById("txtNombreGenericoDos").value=productos[i].nombreGenerico;
    document.getElementById("txtUnidadMedidaDos").value=productos[i].unidadMedida;
    document.getElementById("txtUnidadesEnvaseDos").value=productos[i].unidadEnvase;
    document.getElementById("txtContraindicacionesDos").value=productos[i].contradicciones;
    document.getElementById("txtPrecioUnitarioDos").value=productos[i].precioUnitario;
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
    "nombreProd": nomProd,
    "formaFar":formFar,
    "presentacion": pres,
    "principalIndicacion": prinInd,
    "concentracion": concen,
    "nombreGenerico": nomGen,
    "unidadMedida": uM,
    "unidadEnvase": uE,
    "Contradicciones": cI,
    "precioUnitario": pU
    

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
    "nombreProd": nomProd,
    "formaFar":formFar,
    "presentacion": pres,
    "principalIndicacion": prinInd,
    "concentracion": concen,
    "nombreGenerico": nomGen,
    "unidadMedida": uM,
    "unidadEnvase": uE,
    "Contradicciones": cI,
    "precioUnitario": pU
    

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
//datosTabla+="<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
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
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + productos[incidencias[i]].nombreGenerico + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + productos[incidencias[i]].precioUnitario + "</a></td>";
            datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
            datosTabla += "<td><button class='botonessincontorno' type='button' onclick='modificarProd(" + incidencias[i] + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarProd(" + incidencias[i] + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbProductos").innerHTML = datosTabla;
}

