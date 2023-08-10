
var empleados = [];

function crearEmpleados() {

    let empleado1 = {
        "idEmpleado": 1,
        "nombre": "Isaac",
        "apellidoPaterno": "García",
        "apellidoMaterno": "López",
        "genero": "M",
        "fechaNacimiento": "15/05/2000",
        "rfc": "RFC1234567890",
        "curp": "CURP1234567890123",
        "domicilio": "Calle 123",
        "codigoPostal": "12345",
        "ciudad": "Ciudad A",
        "estado": "Estado X",
        "telefono": "5551234567",
        "foto": "foto",
        "fechaIngreso": "2000-05-15",
        "correoElectronico": "juan@example.com",
        "activo": 1,
        "idUsuario":1,
        "nombreUsuario":"usuario1",
        "contrasenia":"usuario1",
        "rol":"EMPS"
    };



    let empleado2 = {
        "idEmpleado": 2,
        "nombre": "Alejandra",
        "apellidoPaterno": "Rodríguez",
        "apellidoMaterno": "Martínez",
        "genero": "F",
        "fechaNacimiento": "20/10/1995",
        "rfc": "RFC9876543210",
        "curp": "CURP9876543210123",
        "domicilio": "Calle 456",
        "codigoPostal": "54321",
        "ciudad": "Colonia Norte",
        "estado": "Ciudad B",
        "telefono": "5555678901",
        "foto": "foto",
        "fechaIngreso": "02/01/2023",
        "correoElectronico": "maria@example.com",
        "activo": 1,
        "idUsuario":2,
        "nombreUsuario":"usuario2",
        "contrasenia":"usuario2",
        "rol":"ADMS"

    };

    let empleado3 = {
        "idEmpleado": 3,
        "nombre": "Miguel",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Gómez",
        "genero": "M",
        "fechaNacimiento": "10/02/1998",
        "rfc": "RFC5678901234",
        "curp": "CURP5678901234567",
        "domicilio": "Calle Sur",
        "codigoPostal": "98765",
        "ciudad": "Ciudad C",
        "estado": "Estado Z",
        "telefono": "5558901234",
        "foto": "foto",
        "fechaIngreso": "03/01/2023",
        "correoElectronico": "pedro@example.com",
        "activo": 1,
        "idUsuario":3,
        "nombreUsuario":"usuario3",
        "contrasenia":"usuario3",
        "rol":"EMPS"
    };



    let empleado4 = {
        "idEmpleado": 4,
        "nombre": "Ximena",
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Sánchez",
        "genero": "F",
        "fechaNacimiento": "08/07/2002",
        "rfc": "RFC3456789012",
        "curp": "CURP3456789012345",
        "domicilio": "Calle 799",
        "codigoPostal": "98765",
        "ciudad": "Ciudad D",
        "estado": "Estado W",
        "telefono": "5554567890",
        "foto": "foto",
        "fechaIngreso": "04/01/2023",
        "correoElectronico": "ana@example.com",
        "activo": 1,
        "idUsuario":4,
        "nombreUsuario":"usuario4",
        "contrasenia":"usuario4",
        "rol":"ADMS"
    };



    let empleado5 = {
        "idEmpleado": 5,
        "nombre": "Josue",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "López",
        "genero": "M",
        "fechaNacimiento": "15/12/1997",
        "rfc": "RFC2345678901",
        "curp": "CURP2345678901234",
        "domicilio": "Calle 123",
        "codigoPostal": "67890",
        "ciudad": "Ciudad E",
        "estado": "Estado V",
        "telefono": "5555678901",
        "foto": "foto",
        "fechaIngreso": "05/01/2023",
        "correoElectronico": "carlos@example.com",
        "activo": 1,
        "idUsuario":5,
        "nombreUsuario":"usuario5",
        "contrasenia":"usuario5",
        "rol":"EMPS"
    };



    let empleado6 = {
        "idEmpleado": 6,
        "nombre": "Anahi",
        "apellidoPaterno": "García",
        "apellidoMaterno": "Fernández",
        "genero": "F",
        "fechaNacimiento": "25/09/1990",
        "rfc": "RFC6789012345",
        "curp": "CURP6789012345678",
        "domicilio": "Calle 987",
        "codigoPostal": "54321",
        "ciudad": "Ciudad F",
        "estado": "Estado U",
        "telefono": "5556789012",
        "foto": "foto",
        "fechaIngreso": "06/01/2023",
        "correoElectronico": "laura@example.com",
        "activo": 1,
        "idUsuario":6,
        "nombreUsuario":"usuario6",
        "contrasenia":"usuario6",
        "rol":"ADMS"
    };



    let empleado7 = {
        "idEmpleado": 7,
        "nombre": "Roberto",
        "apellidoPaterno": "Vargas",
        "apellidoMaterno": "Martínez",
        "genero": "M",
        "fechaNacimiento": "10/03/1985",
        "rfc": "RFC8901234567",
        "curp": "CURP8901234567890",
        "domicilio": "Calle 456",
        "codigoPostal": "54321",
        "ciudad": "Ciudad H",
        "estado": "Estado S",
        "telefono": "5557890123",
        "foto": "foto",
        "fechaIngreso": "07/01/2023",
        "correoElectronico": "roberto@example.com",
        "activo": 1,
        "idUsuario":7,
        "nombreUsuario":"usuario7",
        "contrasenia":"usuario7",
        "rol":"EMPS"
    };



    let empleado8 = {
        "idEmpleado": 8,
        "nombre": "Sara",
        "apellidoPaterno": "López",
        "apellidoMaterno": "Hernández",
        "genero": "F",
        "fechaNacimiento": "05/11/2001",
        "rfc": "RFC8901234567",
        "curp": "CURP8901234567890",
        "domicilio": "Calle 654",
        "codigoPostal": "54321",
        "ciudad": "Ciudad H",
        "estado": "Estado S",
        "telefono": "5558901234",
        "foto": "foto",
        "fechaIngreso": "08/01/2023",
        "correoElectronico": "sofia@example.com",
        "activo": 1,
        "idUsuario":8,
        "nombreUsuario":"usuario8",
        "contrasenia":"usuario8",
        "rol":"ADMS"
    };



    let empleado9 = {
        "idEmpleado": 9,
        "nombre": "Arturo",
        "apellidoPaterno": "Martínez",
        "apellidoMaterno": "González",
        "genero": "M",
        "fechaNacimiento": "12/06/1993",
        "rfc": "RFC0123456789",
        "curp": "CURP0123456789012",
        "domicilio": "Calle 789",
        "codigoPostal": "67890",
        "ciudad": "Ciudad I",
        "estado": "Estado R",
        "telefono": "5550123456",
        "foto": "foto",
        "fechaIngreso": "09/01/2023",
        "correoElectronico": "alejandro@example.com",
        "activo": 1,
        "idUsuario":9,
        "nombreUsuario":"usuario9",
        "contrasenia":"usuario9",
        "rol":"EMPS"
    };



    let empleado10 = {
        "idEmpleado": 10,
        "nombre": "Elena",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "Gómez",
        "genero": "F",
        "fechaNacimiento": "18/04/1999",
        "rfc": "RFC3456789012",
        "curp": "CURP3456789012345",
        "domicilio": "Calle 456",
        "codigoPostal": "54321",
        "ciudad": "Ciudad J",
        "estado": "Estado Q",
        "telefono": "5550123456",
        "foto": "foto",
        "fechaIngreso": "10/01/2023",
        "correoElectronico": "elena@example.com",
        "activo": 1,
        "idUsuario":10,
        "nombreUsuario":"usuario10",
        "contrasenia":"usuario10",
        "rol":"EMPS"
    };




    empleados[0] = empleado1;
    empleados[1] = empleado2;
    empleados[2] = empleado3;
    empleados[3] = empleado4;
    empleados[4] = empleado5;
    empleados[5] = empleado6;
    empleados[6] = empleado7;
    empleados[7] = empleado8;
    empleados[8] = empleado9;
    empleados[9] = empleado10;
    cargarTablaEmpleados();

}



function cargarTablaEmpleados() {
    let datosTabla = "";
    for (let i = 0; i < empleados.length; i++) {

        var activo = "";
        if (empleados[i].activo == 1)
            activo = "Activos";
        else
            activo = "Inactivo";

        datosTabla += "<tr>";

        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].idEmpleado + "</a></td>";
        datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].apellidoPaterno + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].apellidoMaterno + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].nombre + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].telefono + "</a></td>";
        datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].correoElectronico + "</a></td>";
        datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
        datosTabla += "<td><button class='botonessincontorno' class='btn btn-primary' type='button' data-bs-toggle='modal' data-bs-target='#myModalDos' onclick='modificarEmpleados(" + i + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px; padding: 0; border:0; outline: none;'></i></button><button class='botonessincontorno' type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#ModalEliminar' onclick='eliminarEmpleado(" + i + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d; padding: 0; border:0; outline: none;'></i></button></td>";

        datosTabla += "</tr>";
    }

    document.getElementById("tbEmpleados").innerHTML = datosTabla;
}


function eliminarEmpleado(i) {
    empleados.splice(i, 1);
    cargarTablaEmpleados();
}
function modificarEmpleados(i) {
    //Datos producto
    document.getElementById("txtIdEmpleadoDos").value = empleados[i].idEmpleado;
    document.getElementById("txtNombreDos").value = empleados[i].nombre;
    document.getElementById("txtApellidoPaternoDos").value = empleados[i].apellidoPaterno;
    document.getElementById("txtApellidoMaternoDos").value = empleados[i].apellidoMaterno;
    document.getElementById("fechaNacimientoDos").value = empleados[i].fechaNacimiento;
    document.getElementById("generoDos").value = empleados[i].genero;
    document.getElementById("txtCurpDos").value = empleados[i].curp;
    document.getElementById("txtRfcDos").value = empleados[i].rfc;
    document.getElementById("txtDomicilioDos").value = empleados[i].domicilio;
    document.getElementById("txtCodigoPostalDos").value = empleados[i].codigoPostal;
    document.getElementById("txtEstadoDos").value = empleados[i].estado;
    document.getElementById("txtCiudadDos").value = empleados[i].ciudad;
    document.getElementById("txtTelefonoDos").value = empleados[i].telefono;
    document.getElementById("txtCorreoDos").value = empleados[i].correoElectronico;


}


function guadarEmpleado() {
    //Datos cliente

    let idE = document.getElementById("txtIdEmpleadoDos").value;
    let nomEmp = document.getElementById("txtNombreDos").value;
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

    let empleado1 = {

        "idEmpleado": idE,
        "nombre": nomEmp,
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
    if (idE != 0)
    {
        let pos;
        for (let i = 0; i < empleados.length; i++) {
            if (idE == empleados[i].idEmpleado) {
                pos = i;
            }
        }
        empleados[pos] = empleado1;
    }
    //es nuevo generar ids
    else {
        let id = (empleados.length) + 1;
        empleado1.idEmpleado = id;
        let pos = empleados.length;
        empleados[pos] = empleado1;
    }

    cargarTablaEmpleados();
}



function AgregarEmpleado() {
    //Datos cliente

    let idE = document.getElementById("txtIdEmpleado").value;
    let nomEmp = document.getElementById("txtNombre").value;
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

    let empleado1 = {

        "idEmpleado": idE,
        "nombre": nomEmp,
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
    if (idE != 0)
    {
        let pos;
        for (let i = 0; i < empleados.length; i++) {
            if (idE == empleados[i].idEmpleado) {
                pos = i;
            }
        }
        empleados[pos] = empleado1;
    }
    //es nuevo generar ids
    else {
        let id = (empleados.length) + 1;
        empleado1.idEmpleado = id;
        let pos = empleados.length;
        empleados[pos] = empleado1;
    }

    cargarTablaEmpleados();
}

function limpiarEmpleado() {
    //Datos persona-cliente
    document.getElementById("txtIdEmpleadoDos").value;
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


function buscarEmpleado() {
    // Tomamos el valor de la búsqueda
    var b = document.getElementById("txtBusquedaEmpleado").value;
    // Arreglo para colocar los índices de donde se encontraron datos                
    var incidencias = [];

    for (var i = 0; i < empleados.length; i++) {
        // Recorremos todos los campos de cada producto y comparamos con la búsqueda
        for (var prop in empleados[i]) {
            if (empleados[i][prop].toString().toLowerCase().includes(b.toLowerCase())) {
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
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[incidencias[i]].idEmpleado + "</a></td>";
            datosTabla += "<td><i class='fa-solid fa-circle-user fa-2xl' style='color: #286c7d;'></i></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[incidencias[i]].apellidoPaterno + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[incidencias[i]].apellidoMaterno + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[incidencias[i]].nombre + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[incidencias[i]].telefono + "</a></td>";
            datosTabla += "<td><a class='nav-link' href='#' style='color: black;'>" + empleados[i].correoElectronico + "</a></td>";
            datosTabla += "<td><label class='switch'><input type='checkbox'><span class='slider round'></span></label></td>";
            datosTabla += "<td><button class='botonessincontorno' type='button' onclick='modificarEmpleado(" + incidencias[i] + ");'><i class='fa-solid fa-pen-to-square fa-xl' style='color: #286c7d; margin-right: 20px;'></i></button><button class='botonessincontorno' type='button' onclick='eliminarEmpleado(" + incidencias[i] + ");'><i class='fa-solid fa-trash fa-xl' style='color: #286c7d;'></i></button></td>";
            datosTabla += "</tr>";
        }
    } else {
        datosTabla = "<tr><td colspan='5'>No hay incidencias en la búsqueda</td></tr>";
    }

    document.getElementById("tbEmpleados").innerHTML = datosTabla;
}
