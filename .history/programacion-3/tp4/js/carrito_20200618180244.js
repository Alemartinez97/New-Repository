function enviarDatos() {

           
    let cantidad = document.getElementById("cantidad").value;
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;

    let request = { cantidad: cantidad, nombre: nombre, descripcion: descripcion};

        document.getElementById("resultado").innerHTML = JSON.stringify(request);
        console.log("Detalle Tarea: ",request);
        setTimeout(function() {
            debugger
            alert("Enviado");
            document.getElementById("resultado").innerHTML = JSON.stringify(request) + "... Enviada exitosamente";
        }, 3000);
    }