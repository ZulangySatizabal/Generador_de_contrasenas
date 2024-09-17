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

generar();
