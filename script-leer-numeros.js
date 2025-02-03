            document.write ("<br>");
            var numero =  prompt("Introduce un número entre 1 y 100:");  // Pedimos al usuario que introduzca un número
            numero = Number(numero); // Convertimos el texto a numero

            // Validamos que el número esté dentro del rango
            while (numero < 1 || numero > 100) {
            numero = prompt("Número inválido. Introduce un número entre 1 y 100:");
            numero = Number (numero); // Convertimos el texto a numero
            }
            document.write ("<br>");
