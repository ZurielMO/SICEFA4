
var clientes = [];

function crearClientes() {

    let cliente1 = {
        "idCliente": 1,
        "nombre": "Juan",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "genero": "M",
        "fechaNacimiento": "15/05/2000",
        "rfc": "RFC1234567890",
        "curp": "CURP1234567890123",
        "domicilio": "Calle 123",
        "codigoPostal": "12345",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "5551234567",
        "foto": "foto",
        "fechaRegistro": "01/01/2023",
        "correoElectronico": "juan@example.com",
        "activo": 1
    };



    let cliente2 = {
        "idCliente": 2,
        "nombre": "María",
        "apellidoPaterno": "Rodríguez",
        "apellidoMaterno": "Martínez",
        "genero": "F",
        "fechaNacimiento": "20/10/1995",
        "rfc": "RFC9876543210",
        "curp": "CURP9876543210123",
        "domicilio": "Calle 456",
        "codigoPostal": "54321",
        "ciudad": "Monterry",
        "estado": "Nuevo Leon",
        "telefono": "5555678901",
        "foto": "foto",
        "fechaRegistro": "02/01/2023",
        "correoElectronico": "maria@example.com",
        "activo": 1

    }

    let cliente3 = {
        "idCliente": 3,
        "nombre": "Pedro",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Gómez",
        "genero": "M",
        "fechaNacimiento": "10/02/1998",
        "rfc": "RFC5678901234",
        "curp": "CURP5678901234567",
        "domicilio": "Calle 789",
        "codigoPostal": "98765",
        "ciudad": "Mazatlan",
        "estado": "Sinaloa",
        "telefono": "5558901234",
        "foto": "foto",
        "fechaRegistro": "03/01/2023",
        "correoElectronico": "pedro@example.com",
        "activo": 1
    };



    let cliente4 = {
        "idCliente": 4,
        "nombre": "Ana",
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Sánchez",
        "genero": "F",
        "fechaNacimiento": "08/07/2002",
        "rfc": "RFC3456789012",
        "curp": "CURP3456789012345",
        "domicilio": "Calle 799",
        "codigoPostal": "98765",
        "ciudad": "Guadalajara",
        "estado": "Jalisco",
        "telefono": "5554567890",
        "foto": "foto",
        "fechaRegistro": "04/01/2023",
        "correoElectronico": "ana@example.com",
        "activo": 1
    };



    let cliente5 = {
        "idCliente": 5,
        "nombre": "Carlos",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "López",
        "genero": "M",
        "fechaNacimiento": "15/12/1997",
        "rfc": "RFC2345678901",
        "curp": "CURP2345678901234",
        "domicilio": "Calle 288",
        "codigoPostal": "67890",
        "ciudad": "Merida",
        "estado": "Yucatan",
        "telefono": "5555678901",
        "foto": "foto",
        "fechaRegistro": "05/01/2023",
        "correoElectronico": "carlos@example.com",
        "activo": 1
    };



    let cliente6 = {
        "idCliente": 6,
        "nombre": "Laura",
        "apellidoPaterno": "García",
        "apellidoMaterno": "Fernández",
        "genero": "F",
        "fechaNacimiento": "25/09/1990",
        "rfc": "RFC6789012345",
        "curp": "CURP6789012345678",
        "domicilio": "Calle 333",
        "codigoPostal": "54321",
        "ciudad": "Los Cabos",
        "estado": "Baja California Sur",
        "telefono": "5556789012",
        "foto": "foto",
        "fechaRegistro": "06/01/2023",
        "correoElectronico": "laura@example.com",
        "activo": 1
    };



    let cliente7 = {
        "idCliente": 7,
        "nombre": "Roberto",
        "apellidoPaterno": "Vargas",
        "apellidoMaterno": "Martínez",
        "genero": "M",
        "fechaNacimiento": "10/03/1985",
        "rfc": "RFC7890123456",
        "curp": "CURP7890123456789",
        "domicilio": "Calle 444",
        "codigoPostal": "43210",
        "ciudad": "Puebla",
        "estado": "Puebla",
        "telefono": "5557890123",
        "foto": "foto",
        "fechaRegistro": "07/01/2023",
        "correoElectronico": "roberto@example.com",
        "activo": 1
    };



    let cliente8 = {
        "idCliente": 8,
        "nombre": "Sofía",
        "apellidoPaterno": "López",
        "apellidoMaterno": "Hernández",
        "genero": "F",
        "fechaNacimiento": "05/11/2001",
        "rfc": "RFC8901234567",
        "curp": "CURP8901234567890",
        "domicilio": "Calle 222",
        "codigoPostal": "54321",
        "ciudad": "Mexicali",
        "estado": "Baja California",
        "telefono": "5558901234",
        "foto": "foto",
        "fechaRegistro": "08/01/2023",
        "correoElectronico": "sofia@example.com",
        "activo": 1
    };



    let cliente9 = {
        "idCliente": 9,
        "nombre": "Alejandro",
        "apellidoPaterno": "Martínez",
        "apellidoMaterno": "González",
        "genero": "M",
        "fechaNacimiento": "12/06/1993",
        "rfc": "RFC0123456789",
        "curp": "CURP0123456789012",
        "domicilio": "Calle 900",
        "codigoPostal": "67890",
        "ciudad": "Saltillo",
        "estado": "Coahuila",
        "telefono": "5550123456",
        "foto": "foto",
        "fechaRegistro": "09/01/2023",
        "correoElectronico": "alejandro@example.com",
        "activo": 1
    };



    let cliente10 = {
        "idCliente": 10,
        "nombre": "Elena",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Gómez",
        "genero": "F",
        "fechaNacimiento": "18/04/1999",
        "rfc": "RFC3456789012",
        "curp": "CURP3456789012345",
        "domicilio": "Calle 456",
        "codigoPostal": "54321",
        "ciudad": "Morelia",
        "estado": "Michoacan",
        "telefono": "5550123456",
        "foto": "foto",
        "fechaRegistro": "10/01/2023",
        "correoElectronico": "elena@example.com",
        "activo": 1
    };




    clientes[0] = cliente1;
    clientes[1] = cliente2;
    clientes[2] = cliente3;
    clientes[3] = cliente4;
    clientes[4] = cliente5;
    clientes[5] = cliente6;
    clientes[6] = cliente7;
    clientes[7] = cliente8;
    clientes[8] = cliente9;
    clientes[9] = cliente10;
    cargarTablaClientes();

}



function cargarTablaClientes() {
    let datosTabla = "";
    for (let i = 0; i < clientes.length; i++) {

        var activo = "";
        if (clientes[i].activo == 1)
            activo = "Activos";
        else
            activo = "Inactivo";
        datosTabla += "<tr>";

        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].idCliente + "</a></td>";
        datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].apellidoPaterno + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].apellidoMaterno + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].nombre + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].telefono + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].correoElectronico + "</a></td>";
        datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
        datosTabla += "<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarClientes(" + i + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px; padding: 0; border:0; outline: none;'></i></button><button class='botonessincontorno' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#ModalEliminar' onclick='eliminarCliente(" + i + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d; padding: 0; border:0; outline: none;'></i></button></td>";

        datosTabla += "</tr>";
    }

    document.getElementById("tbClientes").innerHTML = datosTabla;
}


function eliminarCliente(i) {
    clientes.splice(i, 1);
    cargarTablaClientes();
}
function modificarClientes(i) {
    //Datos producto
    document.getElementById("txtIdClienteDos").value = clientes[i].idCliente;
    document.getElementById("txtNombreDos").value = clientes[i].nombre;
    document.getElementById("txtApellidoPaternoDos").value = clientes[i].apellidoPaterno;
    document.getElementById("txtApellidoMaternoDos").value = clientes[i].apellidoMaterno;
    document.getElementById("fechaNacimientoDos").value = clientes[i].fechaNacimiento;
    document.getElementById("generoDos").value = clientes[i].genero;
    document.getElementById("txtCurpDos").value = clientes[i].curp;
    document.getElementById("txtRfcDos").value = clientes[i].rfc;
    document.getElementById("txtDomicilioDos").value = clientes[i].domicilio;
    document.getElementById("txtCodigoPostalDos").value = clientes[i].codigoPostal;
    document.getElementById("txtEstadoDos").value = clientes[i].estado;
    document.getElementById("txtCiudadDos").value = clientes[i].ciudad;
    document.getElementById("txtTelefonoDos").value = clientes[i].telefono;
    document.getElementById("txtCorreoDos").value = clientes[i].correoElectronico;


}


function guadarCliente() {
    //Datos cliente

    let idC = document.getElementById("txtIdClienteDos").value;
    let nomClien = document.getElementById("txtNombreDos").value;
    let apePat = document.getElementById("txtApellidoPaternoDos").value;
    let apeMat = document.getElementById("txtApellidoMaternoDos").value;
    let fechaNac = document.getElementById("fechaNacimientoDos").value;
    let genero = document.getElementById("generoDos").value;
    let curp = document.getElementById("txtCurpDos").value;
    let rfc = document.getElementById("txtRfcDos").value;
    let domC = document.getElementById("txtDomicilioDos").value;
    let cPC = document.getElementById("txtCodigoPostalDos").value;
    let estC = document.getElementById("txtEstadoDos").value;
    let ciuC = document.getElementById("txtCiudadDos").value;
    let telC = document.getElementById("txtTelefonoDos").value;
    let cElec = document.getElementById("txtCorreoDos").value;

    let cliente1 = {

        "idCliente": idC,
        "nombre": nomClien,
        "apellidoPaterno": apePat,
        "apellidoMaterno": apeMat,
        "genero": genero,
        "fechaNacimiento": fechaNac,
        "rfc": rfc,
        "curp": curp,
        "domicilio": domC,
        "codigoPostal": cPC,
        "ciudad": ciuC,
        "estado": estC,
        "telefono": telC,
        "foto": "foto",
        "correoElectronico": cElec
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
    if (idC != 0)
    {
        let pos;
        for (let i = 0; i < clientes.length; i++) {
            if (idC == clientes[i].idCliente) {
                pos = i;
            }
        }
        clientes[pos] = cliente1;
    }
    //es nuevo generar ids
    else {
        let id = (clientes.length) + 1;
        cliente1.idCliente = id;
        let pos = clientes.length;
        clientes[pos] = cliente1;
    }

    cargarTablaClientes();
}



function AgregarCliente() {
    //Datos cliente

    let idC = document.getElementById("txtIdCliente").value;
    let nomClien = document.getElementById("txtNombre").value;
    let apePat = document.getElementById("txtApellidoPaterno").value;
    let apeMat = document.getElementById("txtApellidoMaterno").value;
    let fechaNac = document.getElementById("fechaNacimiento").value;
    let genero = document.getElementById("genero").value;
    let curp = document.getElementById("txtCurp").value;
    let rfc = document.getElementById("txtRfc").value;
    let domC = document.getElementById("txtDomicilio").value;
    let cPC = document.getElementById("txtCodigoPostal").value;
    let estC = document.getElementById("txtEstado").value;
    let ciuC = document.getElementById("txtCiudad").value;
    let telC = document.getElementById("txtTelefono").value;
    let cElec = document.getElementById("txtCorreo").value;

    let cliente1 = {

        "idCliente": idC,
        "nombre": nomClien,
        "apellidoPaterno": apePat,
        "apellidoMaterno": apeMat,
        "genero": genero,
        "fechaNacimiento": fechaNac,
        "rfc": rfc,
        "curp": curp,
        "domicilio": domC,
        "codigoPostal": cPC,
        "ciudad": ciuC,
        "estado": estC,
        "telefono": telC,
        "foto": "foto",
        "correoElectronico": cElec
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
    if (idC != 0)
    {
        let pos;
        for (let i = 0; i < clientes.length; i++) {
            if (idC == clientes[i].idCliente) {
                pos = i;
            }
        }
        clientes[pos] = cliente1;
    }
    //es nuevo generar ids
    else {
        let id = (clientes.length) + 1;
        cliente1.idCliente = id;
        let pos = clientes.length;
        clientes[pos] = cliente1;
    }

    cargarTablaClientes();
}

function limpiarCliente() {
    //Datos persona-cliente
    document.getElementById("txtIdClienteDos").value;
    document.getElementById("txtNombreDos").value;
    document.getElementById("txtApellidoPaternoDos").value;
    document.getElementById("txtApellidoMaternoDos").value;
    document.getElementById("fechaNacimientoDos").value;
    document.getElementById("generoDos").value;
    document.getElementById("txtCurpDos").value;
    document.getElementById("txtRfcDos").value;
    document.getElementById("txtDomicilioDos").value;
    document.getElementById("txtCodigoPostalDos").value;
    document.getElementById("txtEstadoDos").value;
    document.getElementById("txtCiudadDos").value;
    document.getElementById("txtTelefonoDos").value;
    document.getElementById("txtCorreoDos").value;

}

//function buscarCliente() {
//    //tomamos el valor de la busqueda
//    var b = document.getElementById("txtBusquedaCliente").value;
//    //Arreglo para colocar los indices de donde se encontraron datos                
//    var incindecias = [];
//    for (var i = 0; i < clientes.length; i++) {
//        if (clientes[i].idCliente == b ||
//                clientes[i].nombre == b
//                )
//        {
//            //Se toma el tamaño del arreglo de incidencias
//            var pos = incindecias.length;
//            //En esa posicion se agrega el indice del arreglo de Empleados donde se encuentrael valor
//            incindecias[pos] = 1;
//        }
//    }
//
//    let datosTabla = "";
//    //Si hay datos que coincide e la busqueda se genera la tabla de resultados
//    if (incindecias.length > 0) {
//        for (let i = 0; i < clientes.length; i++) {
//
//
//            var activo = "";
//            if (clientes[incindecias[i]].activo === 1)
//                activo = "Activos";
//            else
//                activo = "Inactivo";
//
//            datosTabla += "<tr>";
//
//            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incindecias[i]].idCliente + "</a></td>";
//            datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
//            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incindecias[i]].nombre + "</a></td>";
//            datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
//            datosTabla += "<td><button class='botonessincontorno' type='button' onclick='modificarCliente(" + incindecias[i] + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarCliente(" + incindecias[i] + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
//
//            datosTabla += "</tr>";
//        }
//
//
//    } else {
//        datosTabla = "<tr><td colspan='5'>No hay incidencias del la busqueda</td></tr>";
//    }
//    document.getElementById("tbClientes").innerHTML = datosTabla;
//}


function buscarProd() {
    // Tomamos el valor de la búsqueda
    var b = document.getElementById("txtBusquedaProd").value;
    // Arreglo para colocar los índices de donde se encontraron datos                
    var incidencias = [];

    for (var i = 0; i < clientes.length; i++) {
        // Recorremos todos los campos de cada producto y comparamos con la búsqueda
        for (var prop in clientes[i]) {
            if (clientes[i][prop].toString().toLowerCase().includes(b.toLowerCase())) {
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
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incidencias[i]].idCliente + "</a></td>";
            datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incidencias[i]].apellidoPaterno + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incidencias[i]].apellidoMaterno + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[incidencias[i]].telefono + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + clientes[i].correoElectronico + "</a></td>";
            datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
            datosTabla += "<td><button class='botonessincontorno' type='button' onclick='modificarCliente(" + incidencias[i] + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarCliente(" + incidencias[i] + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbClientes").innerHTML = datosTabla;
}
