let matriz = [,];
for (let a = 0; a < 5; a++) 
{
    for (let b = 0; b < 5; b++) 
    {
        matriz[a,b] = "" + a + b;
    }
}

function mudaMapa()
{
    for (let c = 0; c < 5; c++) 
    {
        for (let d = 0; d < 5; d++) 
        {
            let id = "x" + c + "y" + d;
            document.getElementById(id).innerHTML = "a";
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
            Tabela += 'y' + i + '"> teste </td>';
        }
        Tabela += "</tr>";
    }
    document.getElementById("mapa").innerHTML = Tabela;
}




