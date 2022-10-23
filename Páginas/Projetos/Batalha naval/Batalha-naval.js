let matriz = [,];
for (let a = 0; a < 5; a++) 
{
    for (let b = 0; b < 5; b++) 
    {
        matriz[a,b] = "" + a + b;
    }
}


function geraMapa()
{
    Tabela = "";
    for (let i = 0; i < 5; i++){
        Tabela += "<tr>";
        for (let j = 0; j < 5; j++){
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
    
    for (let i = 0; i < 4; i++) 
    {
       
        id = "x" + numRandômico(0, 4) + "y" + numRandômico(0, 4);
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
    while(quantidadeDeBarcos <3)
    {
        do 
        {
            x = numRandômico(0, 4); 
            y = numRandômico(0, 3);
            id = "x" + x + "y" + y;
           
            deuCerto = true
            if(document.getElementById(id).outerText == "Água")
            { 
                for (let j = 0; j < 2; j++) 
                {
                    var auxliarY = y + j 
                    var idAUX = "x" + x + "y" + auxliarY;
                    console.log("id auxiliar da verificação: " + idAUX)
                    if(document.getElementById(idAUX).outerText == "Água")
                    {
                        console.log("Deu certo a " + (j +1) + "° casa")
                    }
                    else
                    {
                        deuCerto = false
                    }
                }
                console.log("Saiu do for")
            }
            else
            {
                deuCerto = false
            }
            
        } while (deuCerto == false );   
        
        
        for (let j = 0; j < 2; j++) 
        {
            var auxliarY = y + j
            var idAUX = "x" + x + "y" + auxliarY;
            console.log("id auxiliar do posicionamento: " + idAUX)
            document.getElementById(idAUX).innerHTML = "T";
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