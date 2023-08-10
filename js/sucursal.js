var sucursales=[];

function crearSucursales(){
    let sucursal1={  
    "idSuc": 1,
    "nombreSuc": "Sucursal A",
    "tel":"555-1234",
    "dom": "Calle 1 123",
    "cp": "12345",
    "edo": "Estado X",
    "col": "Colonia Centro",
    "ciudad": "Ciudad A",
    "long": "20.1234",
    "lat": "30.5678",
    "nomTit": "Juan Gomez Martinez",
    "rfc":"RFC123",
    "estatus":"Activo"
    

    };
    let sucursal2={  
    "idSuc": 2,
    "nombreSuc": "Sucursal B",
    "tel":"555-5678",
    "dom": "Calle 2 456",
    "cp": "54321",
    "edo": "Estado Y",
    "col": "Colonia Norte",
    "ciudad": "Ciudad B",
    "long": "25.4321",
    "lat": "35.8765",
    "nomTit": "Maria Lopez Garcia",
    "rfc":"RFC456",
    "estatus":"Activo"
    };
    let sucursal3={  
    "idSuc": 3,
    "nombreSuc": "Sucursal C",
    "tel":"555-9876",
    "dom": "Calle 3 789",
    "cp": "98765",
    "edo": "Estado Z",
    "col": "Colonia Sur",
    "ciudad": "Ciudad C",
    "long": "30.9876",
    "lat": "40.1234",
    "nomTit": "Pedro Ramirez Hernandez",
    "rfc":"RFC789",
    "estatus":"Activo"
    };
    let sucursal4={  
    "idSuc": 4,
    "nombreSuc": "Sucursal D",
    "tel":"555-7890",
    "dom": "Calle 4 987",
    "cp": "54321",
    "edo": "Estado W",
    "col": "Colonia Poniente",
    "ciudad": "Ciudad D",
    "long": "24.5678",
    "lat": "35.4321",
    "nomTit": "Ana Perez Rodriguez",
    "rfc":"RFC987",
    "estatus":"Activo"
    };
    let sucursal5={  
    "idSuc": 5,
    "nombreSuc": "Sucursal E",
    "tel":"555-6789",
    "dom": "Calle 5 654",
    "cp": "67890",
    "edo": "Estado V",
    "col": "Colonia Este",
    "ciudad": "Ciudad E",
    "long": "21.3456",
    "lat": "33.8765",
    "nomTit": "Carlos Torres Sanchez",
    "rfc":"RFC654",
    "estatus":"Activo"
    };
    let sucursal6={  
    "idSuc": 6,
    "nombreSuc": "Sucursal F",
    "tel":"555-3456",
    "dom": "Calle 6 321",
    "cp": "43210",
    "edo": "Estado U",
    "col": "Colonia Oeste",
    "ciudad": "Ciudad F",
    "long": "19.8765",
    "lat": "31.2345",
    "nomTit": "Laura Garcia Flores",
    "rfc":"RFC321",
    "estatus":"Activo"

    };
    let sucursal7={  
    "idSuc": 7,
    "nombreSuc": "Sucursal G",
    "tel":"555-4321",
    "dom": "Calle 7 246",
    "cp": "12345",
    "edo": "Estado T",
    "col": "Colonia Centro",
    "ciudad": "Ciudad G",
    "long": "18.1234",
    "lat": "29.5678",
    "nomTit": "Roberto Vargas Lopez",
    "rfc":"RFC246",
    "estatus":"Activo"

    };
    let sucursal8={  
    "idSuc": 8,
    "nombreSuc": "Sucursal H",
    "tel":"555-8765",
    "dom": "Calle 8 135",
    "cp": "54321",
    "edo": "Estado S",
    "col": "Colonia Norte",
    "ciudad": "Ciudad H",
    "long": "15.4321",
    "lat": "27.8765",
    "nomTit": "Elena Fernandez Mendoza",
    "rfc":"RFC135",
    "estatus":"Activo"

    };
    let sucursal9={  
    "idSuc": 9,
    "nombreSuc": "Sucursal I",
    "tel":"555-9876",
    "dom": "Calle 9 864",
    "cp": "98765",
    "edo": "Estado R",
    "col": "Colonia Sur",
    "ciudad": "Ciudad I",
    "long": "13.8765",
    "lat": "25.2345",
    "nomTit": "Isabel Gomez Perez",
    "rfc":"RFC864",
    "estatus":"Activo"

    };
    let sucursal10={  
    "idSuc": 10,
    "nombreSuc": "Sucursal J",
    "tel":"555-6789",
    "dom": "Calle 10 753",
    "cp": "67890",
    "edo": "Estado Q",
    "col": "Colonia Este",
    "ciudad": "Ciudad J",
    "long": "11.3456",
    "lat": "23.8765",
    "nomTit": "Luis Sanchez Ramirez",
    "rfc":"RFC753",
    "estatus":"Activo"

    };
    
    



sucursales[0]=sucursal1;
sucursales[1]=sucursal2;
sucursales[2]=sucursal3;
sucursales[3]=sucursal4;
sucursales[4]=sucursal5;
sucursales[5]=sucursal6;
sucursales[6]=sucursal7;
sucursales[7]=sucursal8;
sucursales[8]=sucursal9;
sucursales[9]=sucursal10;
cargarTablaSucursal();
}

function cargarTablaSucursal(){
    let datosTabla="";
    for(let i=0;i<sucursales.length;i++){
    
    var activo="";
    if(sucursales[i].activo == 1)
        activo="Activos";
    else
        activo="Inactivo";
    
        datosTabla+="<tr>";
        
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[i].rfc+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[i].nomTit+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[i].idSuc+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[i].nombreSuc+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarSuc("+i+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#ModalEliminar' onclick='eliminarSuc("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";

    datosTabla+="</tr>"; 
    }
    
document.getElementById("tbSucursales").innerHTML=datosTabla;   
}


function eliminarSuc (i){
 sucursales.splice(i,1);   
  cargarTablaSucursal();
}
function modificarSuc (i){
 
    document.getElementById("txtIdSucDos").value=sucursales[i].idSuc;
    document.getElementById("txtNombreSucDos").value=sucursales[i].nombreSuc;
    document.getElementById("txtTelefonoDos").value=sucursales[i].tel;
    document.getElementById("txtDomDos").value=sucursales[i].dom;
    document.getElementById("txtCPDos").value=sucursales[i].cp;
    document.getElementById("txtEdoDos").value=sucursales[i].edo;
    document.getElementById("txtColDos").value=sucursales[i].col;
    document.getElementById("txtCiudadDos").value=sucursales[i].ciudad;
    document.getElementById("txtLongDos").value=sucursales[i].long;
    document.getElementById("txtLatDos").value=sucursales[i].lat;
    document.getElementById("txtNombreDos").value=sucursales[i].nomTit;
    document.getElementById("txtRFCDos").value=sucursales[i].rfc;
    
}

function guadarSucursal(){

    let idS = document.getElementById("txtIdSucDos").value;
    let nomSuc = document.getElementById("txtNombreSucDos").value;
    let tel = document.getElementById("txtTelefonoDos").value;
    let dom = document.getElementById("txtDomDos").value;
    let cp = document.getElementById("txtCPDos").value;
    let edo = document.getElementById("txtEdoDos").value;
    let col= document.getElementById("txtColDos").value;
    let ci = document.getElementById("txtCiudadDos").value;
   let long =  document.getElementById("txtLongDos").value;
    let lat = document.getElementById("txtLatDos").value;
    let nT = document.getElementById("txtNombreDos").value;
    let rfc = document.getElementById("txtRFCDos").value;
   
    let sucursal1={  
    "idSuc": idS,
    "nombreSuc": nomSuc,
    "tel":tel,
    "dom": dom,
    "cp": cp,
    "edo": edo,
    "col": col,
    "ciudad": ci,
    "long": long,
    "lat": lat,
    "nomTit": nT,
    "rfc":rfc
    
    

    };


if (idS != 0)
    {
        let pos;
        for (let i = 0; i < sucursales.length; i++) {
            if (idS == sucursales[i].idSuc) {
                pos = i;
            }
        }
        sucursales[pos] = sucursal1;
    }

    else {
        let id = (sucursales.length) + 1;
        sucursal1.idSuc = id;
        let pos = sucursales.length;
        sucursales[pos] = sucursal1;
    }

    cargarTablaSucursal();
}



function AgregarSuc(){
    
    let idS = document.getElementById("txtIdSuc").value;
    let nomSuc = document.getElementById("txtNombreSuc").value;
    let tel = document.getElementById("txtTelefono").value;
    let dom = document.getElementById("txtDom").value;
    let cp = document.getElementById("txtCP").value;
    let edo = document.getElementById("txtEdo").value;
    let col= document.getElementById("txtCol").value;
    let ci = document.getElementById("txtCiudad").value;
   let long =  document.getElementById("txtLong").value;
    let lat = document.getElementById("txtLat").value;
    let nT = document.getElementById("txtNombre").value;
    let rfc = document.getElementById("txtRFC").value;
   
    let sucursal1={  
    "idSuc": idS,
    "nombreSuc": nomSuc,
    "tel":tel,
    "dom": dom,
    "cp": cp,
    "edo": edo,
    "col": col,
    "ciudad": ci,
    "long": long,
    "lat": lat,
    "nomTit": nT,
    "rfc":rfc
    
    

    };


if (idS != 0)
    {
        let pos;
        for (let i = 0; i < sucursales.length; i++) {
            if (idS == sucursales[i].idSuc) {
                pos = i;
            }
        }
        sucursales[pos] = sucursal1;
    }
 
    else {
        let id = (sucursales.length) + 1;
        sucursal1.idSuc = id;
        let pos = sucursales.length;
        sucursales[pos] = sucursal1;
    }

    cargarTablaSucursal();
}

function limpiarSuc (){

    let idS = document.getElementById("txtIdSuc").value;
    let nomSuc = document.getElementById("txtNombreSuc").value;
    let tel = document.getElementById("txtTelefono").value;
    let dom = document.getElementById("txtDom").value;
    let cp = document.getElementById("txtCP").value;
    let edo = document.getElementById("txtEdo").value;
    let col= document.getElementById("txtCol").value;
    let ci = document.getElementById("txtCiudad").value;
   let long =  document.getElementById("txtLong").value;
    let lat = document.getElementById("txtLat").value;
    let nT = document.getElementById("txtNombre").value;
    let rfc = document.getElementById("txtRFC").value;
}

function buscarSuc() {
    // Tomamos el valor de la búsqueda
    var b = document.getElementById("txtBusquedaSuc").value;
    // Arreglo para colocar los índices de donde se encontraron datos                
    var incidencias = [];

    for (var i = 0; i < sucursales.length; i++) {
        // Recorremos todos los campos de cada producto y comparamos con la búsqueda
        for (var prop in sucursales[i]) {
            if (sucursales[i][prop].toString().toLowerCase().includes(b.toLowerCase())) {
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
            datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[incidencias[i]].rfc+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[incidencias[i]].nomTit+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[incidencias[i]].idSuc+"</a></td>";
datosTabla+="<td><a class='nav-link' href='#' style='color: black;'>"+sucursales[incidencias[i]].nombreSuc+"</a></td>";
datosTabla+="<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
datosTabla+="<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarSuc("+i+");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarSuc("+i+");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";

    datosTabla+="</tr>"; 
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbSucursales").innerHTML = datosTabla;
}
