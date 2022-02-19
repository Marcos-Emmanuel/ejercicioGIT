function par(x){
    if(typeof(x)=='number'){

        if(x%2==0){
            return x+" es par";
        } else {
            return x+" es impar";
        }

    } else {
        return "Por favor ingrese un número";
    }
}

let x = 5;
typeof(x);