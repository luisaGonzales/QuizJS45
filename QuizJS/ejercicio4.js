var n = parseInt(prompt("Ingrese el número de rombos"));

function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += "*";
  return s;
}

for (var k = 0; k < 2 * n - 1; k++) {
  var i = k < n ? k :  2*n - 2 - k;
  var content = "";
  for (j = 1; j <= 2*i+1; j++)
    content +=  j;
  var sp = espacios (n - (i+1));
  document.write(sp + content + "</br>");
}
