var user = prompt("Ingrese los números(Sepárelos por espacios)");
var arr = user.split(" ");

function clasificar (arr) {
    var valoresPares = [];
    var valoresImpares = [];
    for (var i = 0; i < arr.length; i++){
      if(i%2 == 0){
        valoresPares.push(arr[i]);
      } else {
        valoresImpares.push(arr[i]);
      }
    }
  return ("Elementos de posición par : " + valoresPares.toString().replace(/,/g," ") + " </br> Elementos de posición impar : " + valoresImpares.toString().replace(/,/g," "));
}

document.write(clasificar(arr));
