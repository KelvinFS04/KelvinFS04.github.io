
        function númeroA(){
            númeroDigitadoA = document.getElementById("input_A").value;
            console.log(númeroDigitadoA);
            númeroDigitadoA = parseInt(númeroDigitadoA)

            return númeroDigitadoA;

        }
        function númeroB(){
            númeroDigitadoB = document.getElementById("input_B").value;
            console.log(númeroDigitadoB);
            númeroDigitadoB = parseInt(númeroDigitadoB);
            return númeroDigitadoB;

        }

        function soma(){
            var soma = númeroA() + númeroB() ;
            console.log(soma);
            document.getElementById('saída').innerHTML = soma;
        }
    