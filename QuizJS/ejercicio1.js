//Ejercicio 1
var n1 = parseInt(prompt("Ingrese el primer número"));
var n2 = parseInt(prompt("Ingrese el segundo número"));
var n3 = parseInt(prompt("Ingrese el tercer número"));
//Función para determinar el número máximo
function máximo (n1, n2, n3){
  var numMáximo;
  if ((n1 > n2) && (n1 > n3)){
    numMáximo = n1;
  }
  else if ((n2 > n1) && (n2 > n3)){
    numMáximo = n2;
  }
  else if ((n3 > n1) && (n3 > n2)){
    numMáximo = n3;
  }
  return numMáximo;
}
//Función para determinar el número mínimo
function mínimo (n1, n2, n3){
  var numMínimo;
  if((n1 < n2) && (n1 < n3)){
    numMínimo = n1;
  }
  else if ((n2 < n1) && (n2 < n3)){
    numMínimo = n2;
  }
  else if ((n3 < n1) && (n3 < n2)){
    numMínimo = n3;
  }
  return numMínimo;
 }

document.write("Máximo = " + máximo(n1,n2,n3) + ", Mínimo = " + mínimo(n1,n2,n3));
