window.addEventListener('DOMContentLoaded', (e) => {
    // con el evento DOMContentLoaded me aseguró que todas las etiquetas HTML 
    // fueron cargadas y procesadas por el browser 
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");

    // Sintaxis de variables:
    // let nombreVariable = valor;
    // más ejemplos
    //let nombre = "Santiago";
    //let edad   = 34; 

    let boton = document.getElementById("btn-suscribir");
    boton.addEventListener("click", (ev) => {
        try {
            // recuperar los valores del formulario 
            let nombre  = document.getElementById("nombre").value;
            let email   = document.getElementById("correo").value;
            if( nombre.length < 5 ) {
                throw new Error("El nombre es demasiado corto!!!");
            }
            let genero  = getGenero(); 
            let intereses = getIntereses();
            let suscriptor = { // JSON =  JavaScript object notation 
                // clave: valor
                nombre_completo: nombre,  //nombre,
                email, // email: email,
                genero,
                intereses,
                fecha_registro: (new Date()).toISOString() 
            };        
            console.dir(suscriptor);
            guardarSuscriptor( suscriptor );
            mostrarExito("Se guardó correctamente su suscripción!!!");
        } catch(err) { 
            mostrarError(err.message); 
        }
    });    
});
