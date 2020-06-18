function enviarDatos() {

           
    let cantidad = document.getElementById("cantidad").value;
    // let nombre = document.getElementById("nombre").value;
    // let descripcion = document.getElementById("descripcion").value;

    let request = { Cantidad: cantidad};

        document.getElementById("resultado").innerHTML = JSON.stringify(request);
        console.log("Producto o Servicio  agregado: ",request);
        setTimeout(function() {
            debugger
            alert("Agregado con exito");
            document.getElementById("resultado").innerHTML = JSON.stringify(request) + "... Enviada exitosamente";
        }, 3000);
    }