function pedirNumeroEnRango(min, max) {
  var numero;
  prompt(`Ingrese un número par entre ${min} y ${max}:`);
  do {
    numero = prompt("Ingrese un número entre " + min +" y " + max + ":");
    numero = Number(numero); 
  } while (numero < min || numero > max);

  return numero;
}
