function mostrar()
{
var cont=0;
var num=prompt("Numero", "ingrese numero");

    for (var i=1;i<=num ; i++) //se pouede declarar la variable var i adentro del for
    {
        if((i%2)==0)
        {
            alert ("es par: " + i);
            cont++; //es lo mismo que poner cont=cont +1;
        }
    }
    alert ("se encontraron " +cont+ " numeros pares");



}//FIN DE LA FUNCIÓN