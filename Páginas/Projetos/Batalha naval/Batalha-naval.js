let matriz = [,];
for (let a = 0; a < 5; a++) 
{
    for (let b = 0; b < 5; b++) 
    {
        matriz[a,b] = "" + a + b;
    }
}

function adicionaSubmarinos()
{
    
    for (let i = 0; i < 3; i++) 
    {
       
        id = "x" + coordenadaRandômica() + "y" + coordenadaRandômica();
        if (document.getElementById(id).outerText == "Água") 
        {
        document.getElementById(id).innerHTML = "Submarino";
        }   
        else
        {
            i--
        }
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

}

function coordenadaRandômica()
{
    let min = 0;
    let max = 4;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



