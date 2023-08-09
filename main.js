let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});




let inputFile = null;

function leerFoto()
{
    inputFile = document.getElementById("inputFileImagen");
    inputFile.onchange = function(evt){cargarFotografia(inputFile);};
}

function cargarFotografia(objetoInputFile)
{
    //Revisamos que el usuario haya seleccionado un archivo:
    if (objetoInputFile.files && objetoInputFile.files[0])
    {
        let reader = new FileReader();
        
        //Agregamos un oyente al lector del archivo para que,
        //en cuanto el usuario cargue una imagen, esta se lea
        //y se convierta de forma automatica en una cadena de Base64:
        
        reader.onload = function (e)
        {
            let fotoB64 = e.target.result;
            document.getElementById("imgFoto").src =fotoB64;
            document.getElementById("txtaCodigoImagen").value = fotoB64;
//            document.getElementById("txtaCodigoImagen").value = 
//                    fotoB64.substring(fotoB64.indexOf(",")+1,
//            fotoB64.length);
        };
        //Leemos el archivo que selecciono el usuario y lo 
        //convertimos en una cadena con la base64:
        reader.readAsDataURL(objetoInputFile.files[0]);
    }
}
