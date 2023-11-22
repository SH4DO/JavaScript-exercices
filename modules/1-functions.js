/*
* la declaracion de una funcion define una funcion con sus 
* usamos la palabra clave 'function'
* 
* Intenta descomentar la siguiente linea de codigo.
* mira 'f saludar() {}' imprimirse en la consola
*/
//console.log(saludar);


// existen 2 maneraas de declarar funciones: declaraciones y expresiones
// DECLARACION --> LA FORMA TRADICIONAL
function saludar(){
    console.log("Hola mundito");
}
// EXPRESIONES---> PUEDE SER ANONIMA Y VA ASIGNADO A UNA VARIABLE
/* 
let saludar = function saludar2(){
    console.log("Hola mundito 2");
    imprimirNombredeFuncion(saludar2);
};
*/
let imprimirNombredeFuncion = (fn) => {
  console.log(fn.name);  
};

saludar();
//imprimirNombredeFuncion(saludar);