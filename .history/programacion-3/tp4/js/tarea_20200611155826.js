function enviarDatos() {

           
    let estado = document.getElementById("estado").value;
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;

    let request = { estado: estado, nombre: nombre, descripcion: descripcion};

        document.getElementById("resultado").innerHTML = JSON.stringify(request);
        console.log("Detalle Tarea: ",request);
        setTimeout(function() {
            debugger
            alert("Enviado");
            document.getElementById("resultado").innerHTML = JSON.stringify(request) + "... Enviada exitosamente";
        }, 3000);
    }