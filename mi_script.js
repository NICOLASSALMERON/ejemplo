	   setTimeout(() => {
 	 	// Código que deseas ejecutar después de 100 milisegundos
 	 	console.log("Esto se ejecutará después de 100ms");
		}, 100);

            var menu =  prompt("Introduce una OPCIÓN");  // Pedimos al usuario que introduzca una opción

            // Validamos que el número esté dentro del rango
            while (menu < 0 || menu > 2) {
	    var menu =  prompt("Introduce una OPCIÓN válida: ");
            menu Number (menu); // Convertimos el texto a numero
            }

 	    document.write ("<br>");
            var numero =  prompt("Introduce un número entre 1 y 100:");  // Pedimos al usuario que introduzca un número
            numero = Number(numero); // Convertimos el texto a numero

            // Validamos que el número esté dentro del rango
            while (numero < 1 || numero > 100) {
            numero = prompt("Número inválido. Introduce un número entre 1 y 100:");
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

