const acerto = new Audio("acerto.mp3");
const erro = new Audio("erro.wav");

//mapa do bot

function ataque(ID)
{
   
    let elemento =  document.getElementById(ID);
    if (document.getElementById(ID).outerText != "Água") 
    {
        elemento.style.backgroundImage = "url('Explosão.png')";
        elemento.style.backgroundColor = "transparent";
        document.getElementById(ID).disabled = true;
        acerto.play();
    }
    else
    {
        elemento.style.backgroundImage = "url('Água.png')";
        elemento.style.backgroundColor = "transparent";
        elemento.disabled = true;
        erro.play();
    }
}   

function geraMapa()
{
    
    Tabela = "";
    for (let i = 0; i < 8; i++){
        Tabela += "<tr>";
        for (let j = 0; j < 8; j++){
            Tabela += '<td> <button id = "x' + j +
            'y' + i + '"onclick="ataque(this.id)"  style="color: transparent;" >Água</button></td>';
        }
        Tabela += "</tr>";
    }
    document.getElementById("mapaBot").innerHTML = Tabela;
    adicionaEmbarcações();

    TabelaP = "";
    for (let i = 0; i < 8; i++){
        TabelaP += "<tr>";
        for (let j = 0; j < 8; j++){
            TabelaP += '<td> <button id = "x' + j +
            'y' + i + 'p" style="color: transparent;" onmouseover = "over(this.id)" onmouseout="out(this.id)" onclick="selecionaPosição(this.id)" >Água</button></td>';
        }
        TabelaP += "</tr>";
    }
    document.getElementById("mapaJogador").innerHTML = TabelaP;

    document.getElementById("mapas").style.display = "block";
    document.getElementById("mapas").style.width = "1000px";
    

}

function adicionaSubmarinos()
{
    
    for (let i = 0; i < 5; i++) 
    {
       
        id = "x" + numRandômico(0, 7) + "y" + numRandômico(0, 7);
        if (document.getElementById(id).outerText == "Água") 
        {
            document.getElementById(id).style.color = "transparent";
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
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 6;
    randomicoMapa = 7;
    tamanhoEmbarcação = 2;
    while(quantidadeDeBarcos <3)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "T";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "T";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        quantidadeDeBarcos++;
    }  
}

function adicionaCruzador()
{
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 5;
    randomicoMapa = 7;
    tamanhoEmbarcação = 3;
    while(quantidadeDeBarcos <2)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "C";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "C";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        quantidadeDeBarcos++;
    }  
}

function adicionaPortaAviões()
{
    quantidadeDeBarcos = 0;
    randomicoMapaLimitado = 4;
    randomicoMapa = 7;
    tamanhoEmbarcação = 4;
    while(quantidadeDeBarcos <1)
    {
        let orientação = numRandômico(1,2);
        if(orientação ==1)
        {
            do 
            {
                x = numRandômico(0, randomicoMapa); 
                y = numRandômico(0, randomicoMapaLimitado);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                

                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < tamanhoEmbarcação; j++) 
                    {
                        var auxiliarY = y + j;
                        var idAUX = "x" + x + "y" + auxiliarY;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarY = y + j;
                var idAUX = "x" + x + "y" + auxiliarY;
                document.getElementById(idAUX).innerHTML = "PA";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        else
        {
            do 
            {
                x = numRandômico(0, randomicoMapaLimitado); 
                y = numRandômico(0, randomicoMapa);
                id = "x" + x + "y" + y;
            
                deuCerto = true;
                if(document.getElementById(id).outerText == "Água")
                { 
                    for (let j = 0; j < 2; j++) 
                    {
                        var auxiliarX = x + j;
                        var idAUX = "x" + auxiliarX + "y" + y;
                        if(document.getElementById(idAUX).outerText != "Água")
                        {
                            deuCerto = false;
                        }
                    }
                }
                else
                {
                    deuCerto = false;
                }
                
            } while (deuCerto == false );   
            
            
            for (let j = 0; j < tamanhoEmbarcação; j++) 
            {
                var auxiliarX = x + j;
                var idAUX = "x" + auxiliarX + "y" + y;
                document.getElementById(idAUX).innerHTML = "PA";
                document.getElementById(idAUX).style.color = "transparent";
            }
        }
        quantidadeDeBarcos++;
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

//mapa do jogador

seleção = "A"
quantidadeSubmarinos = 0

function submarinoAtivo()
{
    seleção = "S" 
}

function torpedeiroAtivo()
{
    seleção = "T"
}

function cruzadorAtivo()
{
    seleção = "C"
}

function portaAviõesAtivo()
{
    seleção  = "PA"
}


function over(ID)
{
    if (seleção == "S") 
    {   
        if (document.getElementById(ID).innerHTML == "Água")
        {
            document.getElementById(ID).style.backgroundColor = "green"   
        }
    }
}

function out(ID)
{
    if (seleção == "S") 
    {   
        if (document.getElementById(ID).innerHTML == "Água")
        {
            document.getElementById(ID).style.backgroundColor = "white"   
        }
    }
}

function selecionaPosição(ID)
{
    if(quantidadeSubmarinos < 5)
    {
        if (document.getElementById(ID).innerHTML == "Água") 
        {
            if (seleção == "S") 
            {
                document.getElementById(ID).style.backgroundColor = "blue" 
                document.getElementById(ID).innerHTML = seleção    
                document.getElementById(ID).style.color = "black"    
                quantidadeSubmarinos++  
            }
        }
        else
        {
            window.alert("Selecione uma posição válida")
        }
    }   
}