var user = prompt("Ingrese los valores (Separelos por espacios)");
var arr = user.split(" ");

function reverso (arr){
  var arrReverso = arr.reverse().toString().replace(/,/g," ");
  return arrReverso;
}
document.write("Los valores invertidos son: " + reverso(arr));
