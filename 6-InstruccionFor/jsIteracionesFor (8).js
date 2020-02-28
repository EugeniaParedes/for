function mostrar()
{

    var num=prompt("Numero", "Ingrese numero");
    var flag=true; //"bandera", vareable booleana, verdadero o falso

        for(var i=2;i<=num-1;i++) //empieza en 2 porque ya sabemos que 1 es divisible, 
                                 //y a num le pone -1 porque en el ejemplo ingresa numero 10 y tamb sabemos que es divisible, 
                                 
        {
            if(num%i==0)
            {
                flag=false;
            }
        }

        if (flag == true)
        {
            alert("El numero "+num+" es primo");
        }else{
            alert("El numero "+num+" no es primo");
        }

}//FIN DE LA FUNCIÓN