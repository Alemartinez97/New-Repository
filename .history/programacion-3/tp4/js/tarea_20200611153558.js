function enviarDatos() {

           
    let codigo = document.getElementById("estado").value;
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("descripcion").value;

    let request = { estado: estado, nombre: nombre, descripcion: descripcion};

        document.getElementById("resultado").innerHTML = JSON.stringify(request);
        console.log("Detalle Tarea: ",request);
        setTimeout(function() {
            alert("Enviado");
            // document.getElementById("resultado").innerHTML = JSON.stringify(request) + "... Enviada exitosamente";
        }, 3000);
    }