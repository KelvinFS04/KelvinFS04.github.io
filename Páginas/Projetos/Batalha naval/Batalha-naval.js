let matriz = [,];
for (let a = 0; a < 8; a++) 
{
    for (let b = 0; b < 8; b++) 
    {
        matriz[a,b] = "" + a + b;
    }
}


function geraMapa()
{
    Tabela = "";
    for (let i = 0; i < 8; i++){
        Tabela += "<tr>";
        for (let j = 0; j < 8; j++){
            Tabela += '<td id = "x' + j;
            Tabela += 'y' + i + '">Água</td>';
        }
        Tabela += "</tr>";
    }
    document.getElementById("mapa").innerHTML = Tabela;
    adicionaSubmarinos();
    adicionaTorpedeiro();

}

function adicionaSubmarinos()
{
    
    for (let i = 0; i <= 5; i++) 
    {
       
        id = "x" + numRandômico(0, 7) + "y" + numRandômico(0, 7);
        if (document.getElementById(id).outerText == "Água") 
        {
            document.getElementById(id).innerHTML = "S";
        }   
        else
        {
            i--;
        }
    }           
}

function adicionaTorpedeiro()
{
    quantidadeDeBarcos = 0
    while(quantidadeDeBarcos <=4)
    {
        let orientação = numRandômico(1,2);
        console.log(orientação)
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, 7); 
                y = numRandômico(0, 6);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarY = y + j 
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false
                        }
                    }
                }
                else
                {
                    deuCerto = false
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < 2; j++) 
            {
                var auxiliarY = y + j
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "T";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, 6); 
                y = numRandômico(0, 7);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j 
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false
                        }
                    }
                }
                else
                {
                    deuCerto = false
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < 2; j++) 
            {
                var auxiliarX = x + j
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "T";
            }
        }
        quantidadeDeBarcos++
    }  
}

function numRandômico(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}