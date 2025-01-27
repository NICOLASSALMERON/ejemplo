
            var numero =  prompt("Introduce una OPCIÓN");  // Pedimos al usuario que introduzca una opción
            numero = Number(numero); // Convertimos el texto a numero

            // Validamos que el número esté dentro del rango
            while (numero < 0 || numero > 2) {
	    var numero =  prompt("Introduce una OPCIÓN válida: ");
            numero = Number (numero); // Convertimos el texto a numero
            }
                     
            //Iniciamos las variables
            var suma = 0; 
            var i = 1;

            // Realizamos la suma desde 1 hasta el número introducido
            for (i = 1; i <= numero; i++) {
            suma = suma + i;
            document.write ("<br>La suma de todos los numeros introducidos entre 1 y " + i + " es: " + suma);
            }

            // Mostramos el resultado en la página web
            document.write ("<br><br>La suma TOTAL de todos los numeros introducidos entre 1 y " + numero + " es: " + suma);
