            function comprobarEsPrimo(numero) {
                var esPrimo;
                var i;
                
                // Los números negativos, 0 y 1 no son primos
                if (numero <= 1) {
                        esPrimo = false;
                        return esPrime;
                      }
                // Comprobamos si el número es divisible por algún número entre 2 y su raíz cuadrada.
                for (i = numero-1; i <= 2; i = i-1) {
                    if (numero % i === 0) {
                            esPrimo = false;
                            return esPrime;
                            }
                 }
                 // Si no se encontró ningún divisor, el número es primo
                 esPrimo = true;
                 return esPrimo;
            }
