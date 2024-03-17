 /*let titulo = document.querySelector('h1'); /* en este caso se toma en cuenta la diferente estructura del html, en el cual
 el elemento document formaria en si un puente entre los dos lenguajes, y en este caso el elemento queryselector
 lo que hace es buscar y seleccionar los distintos elementos y se nombrara el elemento especifico que se desea seleccionar*/
// titulo.innerHTML ='juego del numero secreto';
/* let parrafo =document.querySelector('p'); /*se defien una variable parrafo con el fin de utilzar la etiqueta p para colocar 
 un texto en el parrafo desde javascrip, y se mandaria a llamar con el document y queryselector*/
 //parrafo.innerHTML ='Indica un numero del 1 al 100'; //se define la variable para que desde javascrip aparezca el texto deseado

let numeroSecreto= 0 ;
let intentos =0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;
 function asignarTextoElemento(elemento, texto){   // esta funcion lo que hace seria redicr el codigo y hacerlo mas legible
    let elementoHTML = document.querySelector(elemento); //se agregan nuevas funciones y variables, en este caso llamaria el elemento
    elementoHTML.innerHTML = texto; //se generaria un llamado al elemento texto
   return;
 }
 function VerificarIntento() { //encapsulamiento de una accion por hacer que es llamado desde html
//alert('click desde el boton'); //mensaje que se mostrara en patalla
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
/*console-log(typeof(numeroDeUsuario));
console.log(numeroSecreto);
console.log(typeof(numeroSecreto));
console-log(numeroDeUsuario);*/
if (numeroDeUsuario===numeroSecreto) {
asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
   //el usuario no acerto
   if (numeroDeUsuario >numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menor');
   } else {
      asignarTextoElemento('p', 'El numero secreto es mayor');
   }
   intentos++;
   limpiarCaja();
}
return; 
}
function limpiarCaja() {
   let valorCaja=document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
   }else {
   //si el numero generado esta incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
return generarNumeroAleatorio();
   } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
   }
}
}
function condicionesIniciales() {
   asignarTextoElemento('h1', 'Juego del numero secreto');
   asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto= generarNumeroAleatorio();
   intentos= 1;
}
function reiniciarJuego() {
   //limpiar la caja
   limpiarCaja();
   //indicar mensaje de intervalo de numeros
   condicionesIniciales();
   //generar el numero aleatorio
   //numeroSecreto= generarNumeroAleatorio();
   //intentos
   //intentos= 1;
   //desabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}
   
 //asignarTextoElemento('h1', 'Juego del numero secreto'); // lo que hace en este caso es llamar a los elemntos de html y indica seguidamente
 //el elemento, en estre caso texto que se va a implementar
// asignarTextoElemento('p', 'Indica un numero del 1 al 10');//lo mismo que el anterior, en si lo que hace es resumir lo mas posible el codigo
condicionesIniciales();

//comillas invertidas alt +96
//buscador de palabras ctr + f