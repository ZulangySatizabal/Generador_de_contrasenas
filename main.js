// Cadena de caracteres utilizada en el aula para construir la contraseña: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.

let cantidad_caracteres = document.getElementById("cantidad");
let btn_generar = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");

const cadena_caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {
  let campo_caracter = parseInt(cantidad_caracteres.value);

  if (campo_caracter < 8) {
    alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
  }else{
    let contraseña_generada = "";
    //elige aleatoriamente los caracteres de la contraseña
    for (let i = 0; i < campo_caracter; i++) {
        let caracter_aleatorio = cadena_caracteres[
            Math.floor(
                Math.random() * cadena_caracteres.length
        )];
        contraseña_generada += caracter_aleatorio; // Concatenar el carácter aleatorio a la contraseña
    }
    //Se muestra la contraseña creada en el campo contraseña
    contraseña.value = contraseña_generada;
  }
}

function limpiar(){
    cantidad_caracteres.value = ""
    contraseña.value = ""
}

function copiar() {
    // Copiar el texto utilizando la API moderna
    navigator.clipboard.writeText(contraseña.value).then(() => {
        // Mostrar mensaje de confirmación
        alert("Contraseña copiada al portapapeles");
    }).catch(err => {
        // Si ocurre un error, lo mostramos
        console.error("Error al copiar la contraseña: ", err);
    });
}

function validar_contraseña(){
    // Expresiones regulares para validar diferentes aspectos
    const tieneNumero = /\d/;                // Verifica si tiene al menos un número
    const tieneMayuscula = /[A-Z]/;          // Verifica si tiene al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/;          // Verifica si tiene al menos una letra minúscula
    const tieneLongitud = contraseña.value.length >= 8;  // Verifica que la longitud sea al menos 8 caracteres

    // Validación de la fortaleza de la contraseña
    if (!tieneNumero.test(contraseña.value)) {
        alert("La contraseña es débil: debe contener al menos un número.");
    } else if (!tieneMayuscula.test(contraseña.value)) {
        alert("La contraseña es débil: debe contener al menos una letra mayúscula.");
    } else if (!tieneMinuscula.test(contraseña.value)) {
        alert("La contraseña es débil: debe contener al menos una letra minúscula.");
    } else if (!tieneLongitud) {
        alert("La contraseña es débil: debe tener al menos 8 caracteres.");
    } else {
        alert("La contraseña es fuerte.");
    }
}
