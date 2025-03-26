function pedirNumeroEnRango(min, max)
  {
  var numero;
  do  {
      numero = prompt("Ingrese un número entre " + min +" y " + max + ":");
      numero = Number(numero); 
      } while (numero < min || numero > max);
  return numero;
  }

function pedirNumeroEnRangoMejorado(texto, min, max) {
    var numero;
    var esUnNumero;
    do {
        numero = prompt(texto + min + " y " + max + ":");
        esUnNumero = isNan(numero);
        if (esUnNumero) {
            alert("Entrada no válida. Por favor, ingrese un número.");
        } else {
            numero = Number(numero);
        }
    } while (esUnNumero || numero < min || numero > max);
    return numero;
}
   //Mejoras realizadas
        //- Verificación de isNaN():
            //Antes de intentar convertir la entrada a un número con Number(), verificamos si isNaN(numero) es verdadero.
            //Si lo es, significa que la entrada no es un número válido.
            //Si la entrada no es válida, mostramos una alerta al usuario pidiéndole que ingrese un número.
            //Si la entrada es válida, la convertimos a un número con Number().
        //-Condición del while:
            //La condición del while ahora incluye isNaN(numero). Esto asegura que el bucle se repita si el usuario ingresa una entrada no numérica.
  

