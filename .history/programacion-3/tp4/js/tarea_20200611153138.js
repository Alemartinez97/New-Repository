function enviarDatos() {

           
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let precio= document.getElementById("precio").value;

    let request = { codigo: codigo, nombre: nombre, marca: marca,precio: precio };

        document.getElementById("resultado").innerHTML = JSON.stringify(request);
        console.log("Detalle Producto: ",request)

        setTimeout(function() {
            document.getElementById("resultado").innerHTML = JSON.stringify(request) + "... Enviada exitosamente";
        }, 3000);
    }