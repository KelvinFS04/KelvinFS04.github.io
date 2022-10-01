
        function númeroA(){
            númeroDigitadoA = document.getElementById("input_A").value;
            númeroDigitadoA = parseInt(númeroDigitadoA);
            console.log(númeroDigitadoA);
            return númeroDigitadoA;

        }
        function númeroB(){
            númeroDigitadoB = document.getElementById("input_B").value;
            númeroDigitadoB = parseInt(númeroDigitadoB);
            console.log(númeroDigitadoB);
            return númeroDigitadoB;

        }



        function soma(){
            var soma = númeroA() + númeroB();
            if (soma != NaN) {
                
                document.getElementById('saída').innerHTML = soma;
                
            } else {
                document.getElementById('saída').innerHTML = "Digite um valor válido";
            }
            console.log(soma)
        }
        function subtração(){
            var subtração = númeroA() - númeroB();
            document.getElementById('saída').innerHTML = subtração;
        }
        function multiplicação(){
            var multiplicação = númeroA() * númeroB();
            document.getElementById('saída').innerHTML = multiplicação;
        }
        function divisão(){
            var divisão = númeroA() / númeroB();
            document.getElementById('saída').innerHTML = divisão;
        }
    