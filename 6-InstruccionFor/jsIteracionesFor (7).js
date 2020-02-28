function mostrar()
{
    var num=0;
    var cont=0;
    
    var num=prompt("Numero", "ingrese numero");
    
    for (var i=1; i<=num; i++)
    {
        if ((num%i)==0) // el numero ingresado dividido i si da 0 es divisor
        {
            alert ("es divisor" + i );
            cont++;
        }
    }
        alert ("los numeros divisores son " + cont);



}//FIN DE LA FUNCIÓN