var n = 4;
function espacios(n){
  var s = "";
  for (var i = 0; i < n; i++){
    s += " ";
  }
  return s;
}

for (var i = 0; i < n; i++){
  var sp = espacios(n-(i+1));
  var num = "";
  for (var j = 0; j < i + 1; j++){
    num += j;
  }
}
console.log(sp + num);
