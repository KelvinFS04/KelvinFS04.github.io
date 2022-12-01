//mapa do bot

function ataque(elemento)
{
    console.log(elemento)
}   

//mapa do jogador
function geraMapa()
{
    Tabela = "";
    for (let i = 0; i < 8; i++){
        Tabela += "<tr>";
        for (let j = 0; j < 8; j++){
            Tabela += '<td> <button id = "x' + j +
            'y' + i + '"onclick="ataque(this.id)">Água</button></td>';
        }
        Tabela += "</tr>";
    }
    document.getElementById("mapa").innerHTML = Tabela;
    adicionaEmbarcações()

}

function adicionaSubmarinos()
{
    
    for (let i = 0; i < 5; i++) 
    {
       
        id = "x" + numRandômico(0, 7) + "y" + numRandômico(0, 7);
        if (document.getElementById(id).outerText == "Água") 
        {
            document.getElementById(id).style.color = "white"
            document.getElementById(id).innerHTML = "S"
            
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
    while(quantidadeDeBarcos <4)
    {
        let orientação = numRandômico(1,2);
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

function adicionaCruzador()
{
    quantidadeDeBarcos = 0
    while(quantidadeDeBarcos <3)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, 7); 
                y = numRandômico(0, 5);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 3; j++) 
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
            
            
            for (let j = 0; j < 3; j++) 
            {
                var auxiliarY = y + j
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "C";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, 5); 
                y = numRandômico(0, 7);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 3; j++) 
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
            
            
            for (let j = 0; j < 3; j++) 
            {
                var auxiliarX = x + j
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "C";
            }
        }
        quantidadeDeBarcos++
    }  

}

function adicionaPortaAviões()
{
    quantidadeDeBarcos = 0
    while(quantidadeDeBarcos <2)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, 7); 
                y = numRandômico(0, 4);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 4; j++) 
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
            
            
            for (let j = 0; j < 4; j++) 
            {
                var auxiliarY = y + j
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "PA";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, 4); 
                y = numRandômico(0, 7);
                id = "x" + x + "y" + y;
            
                deuCerto = true
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 4; j++) 
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
            
            
            for (let j = 0; j < 4; j++) 
            {
                var auxiliarX = x + j
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "PA";
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

function adicionaEmbarcações()
{
    adicionaPortaAviões();
    adicionaCruzador();
    adicionaTorpedeiro();
    adicionaSubmarinos();
}