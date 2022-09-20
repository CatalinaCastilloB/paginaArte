
    // con el evento DOMContentLoaded me aseguró que todas las etiquetas HTML 
    // fueron cargadas y procesadas por el browser 
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
  

    // Sintaxis de variables:
    // let nombreVariable = valor;
    // más ejemplos
    //let nombre = "Santiago";
    //let edad   = 34; 


    let boton = document.getElementById("btn-contact");
    boton.addEventListener("click", (ev) => {
        try {
            // recuperar los valores del formulario 
            let nombre  = document.getElementById("nombre").value;
            let email   = document.getElementById("correo").value;
            if( nombre.length < 5 ) {
                throw new Error("El nombre es demasiado corto!!!");
            }

            let mensaje = document.getElementById("nombre").value;
            
            let suscriptor = { // JSON =  JavaScript object notation 
                // clave: valor
                nombre_completo: nombre,  //nombre,
                email, // email: email,
               mensaje
            };        
            console.dir(suscriptor);
            
            mostrarExito("Se guardó correctamente su suscripción!!!");
        } catch(err) { 
            console.log(err.message); 
        }
    });  


  


   


/** probar con el bootstrap, tal vel hay interferencia entre los codigos */
