function factorial(x){
    let resultado=x;
    for(let i=1 ; i<x ; i++){
        resultado*=i;
    }
    return resultado;
}

console.log(factorial(5));