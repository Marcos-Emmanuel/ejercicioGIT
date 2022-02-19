function palindromo(cadena){
    let auxreverse="";
    let esPalindromo=true;
    let aux=cadena.replace(/ /g,'');
    aux=aux.toLowerCase();
    

    for (var i=aux.length-1 ; i >=0 ; i--) {
        auxreverse += aux[i];
    }

    if(aux==auxreverse){
        console.log("Sí es un palíndromo");
    }else{
        console.log("No es un palíndromo");
    }

}

palindromo("La ruta nos aporto otro paso natural");