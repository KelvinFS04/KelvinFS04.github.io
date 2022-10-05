
function númeroA(){
    númeroDigitadoA = document.getElementById("input_A").value;
    númeroDigitadoA = parseFloat(númeroDigitadoA);
    return númeroDigitadoA;

}
function númeroB(){
    númeroDigitadoB = document.getElementById("input_B").value;
    númeroDigitadoB = parseFloat(númeroDigitadoB);
    return númeroDigitadoB;

}



function soma(){
   
    var soma = númeroA() + númeroB();
   
    if (isNaN(soma)) {
        
        document.getElementById('saída').innerHTML = "Digite um valor válido";
        
    } else {
        document.getElementById('saída').innerHTML = soma;
    }
}
function subtração(){
   
    var subtração = númeroA() - númeroB();
   
    if (isNaN(subtração)) {
        
        document.getElementById('saída').innerHTML = "Digite um valor válido";
        
    } else {
        document.getElementById('saída').innerHTML = subtração;
    }
}
function multiplicação(){
  
    var multiplicação = númeroA() * númeroB();
  
    if (isNaN(multiplicação)) {
        
        document.getElementById('saída').innerHTML = "Digite um valor válido";
        
    } else {
        document.getElementById('saída').innerHTML = multiplicação;
    }
}
function divisão(){
    
    var divisão = númeroA() / númeroB();
    
    //se não fizer esse if, dá infinito
    if(númeroB() == 0)
    {
        document.getElementById('saída').innerHTML = "Inderteminação matemática";
        
    }
    else{
            
        if (isNaN(divisão)) {
            
            document.getElementById('saída').innerHTML = "Digite um valor válido";
            
        } else {
            document.getElementById('saída').innerHTML = divisão;
        }
    }
}   