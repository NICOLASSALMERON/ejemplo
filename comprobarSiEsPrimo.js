            function comprobarEsPrimo(numero) {
                // Los números negativos, 0 y 1 no son primos
                if (numero <= 1) {
                        return false;
                      }
                // Comprobamos si el número es divisible por algún número entre 2 y su raíz cuadrada.
                for (var i = numero-1; i <= 2; i--) {
                    if (numero % i === 0) {
                            return false;
                            }
                 }
                 // Si no se encontró ningún divisor, el número es primo
                 return true;
            }
