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
            document.getElementById(id).innerHTML = "Submarino";
        }   
        else
        {
            i--;
        }
    }           
}

function adicionaTorpedeiro()
{
    
    for (let i = 0; i < 3; i++) 
    {
        console.log("Entrou no laço de quantidade de torpedeiros")
        x = numRandômico(0, 4);
        y = numRandômico(0, 4);
        id = "x" + x + "y" + y;
        let orientação = numRandômico(1,2);
       
        if (orientação == 1 && y >= 2 && y <= 3) 
        { 
            
            console.log("Entrou no if de orientação")
            
            for (let j = 0; j < 2; j++) 
            {
                console.log("Entrou no laço de quantidade de casas de torpedeiros")
            
                if (document.getElementById(id).outerText == "Água") 
                {
                    console.log("Entrou no if de primeira casa")
                    let cabe = true;
                    let aux =0
                    aux += j +1
                    let validaçãoIDs = "x" + x +"y" + aux;
                    console.log("id = " + validaçãoIDs)
                    if(document.getElementById(validaçãoIDs).outerText != "Água")
                    {
                        console.log("Entrou no if de != Água")
                        cabe = false
                    }
                    if (cabe == true) 
                    {
                        console.log("Entrou no if de cabe == true ")
                        let colocandoID = "x" + x +"y" + aux
                        document.getElementById(colocandoID).innerHTML = "Torpedeiro";   
                    }
                    
                }   
                else
                {
                    j--;
                }
            }
        }
        else
        {
            console.log("Não entrou no if de orientação")
            i--
        }
    } 
}

function numRandômico(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



