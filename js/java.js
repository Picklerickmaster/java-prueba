// variables
// let variable -> declaracion
// let variable = valor -> Asignacion del valor de la variable
// let nombre = "agus";
// let edad = 16;
// let apellido = "Alonso";

// console.log(apellido);
// // en const necesitas asignarle valor a la variable en la misma linea y no le podes cambiar el valo r
// const curso = "javascript";
// curso = "html";

// // operaciones

// let numero1 = 3;
// let numero2 = 5;
// const suma = numero1 + numero2;

// let nombre = "Agustin";
// let apellido = "Alonso";

// // let nombre_Completo = nombre + apellido;

// // console.log(nombre_Completo);

// // prompt()
// // aleert()
// // confirm()

// let nombreCompleto = `Hola ${nombre} ${apellido}! Bienvenido a nuestro curso!`;
// console.log(nombreCompleto);

// let precioProducto = parseFloat(prompt("Ingrese el precio de su producto"));

// const IVA = 1.21;

// let precioConIva = precioProducto * IVA;

// alert(`El precio final de venta de su producto es de ${precioConIva}`);

let nombreDelProducto = prompt("Ingrese el nombre del producto");
let cantidadDelProducto = prompt("Ingrese la cantidad del stock producto");
let categoriaDelProducto = prompt("Ingrese la categoria del stock producto");

alert(`Haz registrado ${cantidadDelProducto} de ${nombreDelProducto} en la categoria ${categoriaDelProducto}`);
