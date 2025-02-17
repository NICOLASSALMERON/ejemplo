function comprobarEsPrimo (numero)
{
  var esPrimo;
  var i;

  for (i=numero-1; i>=2; i=i-1 )
    {
      if ( numero % i == 0 )
        {
        esPrimo = false;  
        }
    }
  // si no hemos encontrado ningún divisor entonces el numero es primo
  esPrimo = true;
  return esPrimo;
}
