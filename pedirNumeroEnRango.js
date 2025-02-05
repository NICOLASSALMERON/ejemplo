function pedirNumeroEnRango(min, max) {
  let numero;

  do {
    numero = prompt("Ingrese un número entre ${min} y ${max}:");
    numero = Number(numero); 
  } while (isNaN(numero) || numero < min || numero > max);

  return numero;
}
