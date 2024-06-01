//Funciones
console.log("Funciones...")

// Function de saludar
function hello(mensaje){
    console.log('Hello')
}
hello();    

// Funcion de suma
function addNumbers(a,b){
    return a+b;
}
let a = 7
let b = 1
let resultado = addNumbers(a,b)
console.log("The sum is: " + resultado)

// Funcion de resta
function subNumber(a,b){
    return a-b;
}
a = 1
b = 10
resultado = subNumber(a,b)
console.log("The substraction is: " + resultado)

// Function of division
function division(a,b){
    return a/b;
}

a = 6
b = 2
resultado = division(a,b)
console.log("The division is: " + resultado)

// Function of multiplication
function multiplication(a,b){
    return a*b
}
a =2
b = 3
resultado = multiplication(a,b)
console.log("The multiplication is: " + resultado);

// Function of skibidi
function skibidi(mensaje){
   console.log("Toilet")
}
skibidi();

// Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
function vocal(char){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return true;
    }else if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
        return true
    }else{
        return false
    }
}

 resultado = vocal("a");
 console.log(resultado);

 /*
    Crea una función llamada generar_caracteres() 
    que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».
 */
function caracter(a, b){
    respuesta = ""
    for(let i = 0; i<a;i++){
       respuesta += b 
    }
    return respuesta
}
a = 1
b = "x"
respuesta = caracter(a,b)
console.log(respuesta);



// Funcion de divison
function division(a,b){
    return a/b
}
a = 6
b = 6
resultado = division(a,b)
console.log(resultado)

// Funcion de division y parentesis
function math(a,b,c){
    return a/b * c
}
a = 6
b = 2
let c = 5
respuesta = math(a,b,c)
console.log(respuesta);

// Function pyramid
function pyramid(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        result += spaces + stars + spaces + "\n";
    }
    return result;
}

let n = 5; // Altura de la pirámide
let respuesta = pyramid(n);
console.log(respuesta);