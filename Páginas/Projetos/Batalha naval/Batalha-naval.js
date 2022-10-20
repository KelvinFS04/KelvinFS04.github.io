function geraMapa()
{
Tabela = ""
    for (let i = 0; i < 5; i++){
        Tabela += "<tr>"
        for (let j = 0; j < 5; j++){
            Tabela += '<td id = "x' + j;
            Tabela += 'y' + i + '"> teste </td>'
        }
        Tabela += "</tr>"
    }
    document.getElementById("mapa").innerHTML = Tabela
}