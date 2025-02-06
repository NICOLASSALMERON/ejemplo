            function comprobarEsPrimo(numero) {
                var esPrimo;
                var i;
                
                // Comprobamos si el número es divisible por algún número entre 2 y su raíz cuadrada.
                for (i = numero-1; i >= 2; i = i-1) {
                    if (numero % i === 0) {
                            esPrimo = false;
                            return esPrimo;
                            }
                 }
                 // Si no se encontró ningún divisor, el número es primo
                 esPrimo = true;
                 return esPrimo;
            }
