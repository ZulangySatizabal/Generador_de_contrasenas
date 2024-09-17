// Seleccionar el número introducido en el campo_caracteres
let cantidad_caracteres = document.getElementById("cantidad");
let contraseña;

let btn_generar = document.getElementById("generar");

// console.log(contraseña.length)

function generar (){

    let campo_caracter = parseInt(cantidad_caracteres.value)

    if (campo_caracter < 8){
        alert("Su contraseña tiene que ser mayor o igual a 8 caracteres");
    }else {
        
    };

};

generar();

