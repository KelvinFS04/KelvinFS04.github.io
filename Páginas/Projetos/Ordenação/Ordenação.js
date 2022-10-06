
let vetorDeDados = []

function digitoDeEntrada(event){
    if (event.keyCode == 13){
        botãoDeEntrada();
    }
}

function botãoDeEntrada(){
    let valor = parseInt(document.getElementById("entrada").value)
    if(isNaN(valor))
    {
        window.alert("Número inválido")
    }
    else
    {
        vetorDeDados.push(valor)
        for(var i = 0; i < vetorDeDados.length; i ++)
        {
            for(var j = 0; j < vetorDeDados.length; j ++)
            {
                if(vetorDeDados[i] < vetorDeDados[j])
                {
                var auxiliar = vetorDeDados[i]
                vetorDeDados[i] = vetorDeDados [j]
                vetorDeDados[j] = auxiliar
                }             
            }
        }
        document.getElementById("entrada").value = ""
        atualizaTabela()
    }
}

function atualizaTabela()
{
    Tabela = ""
    for (let j = 0; j < vetorDeDados.length;){
        Tabela += "<tr>"
        for (let i = 0; i < 7; i++, j++){
            if (j >= vetorDeDados.length){
                break
            }
            Tabela += "<td>" + vetorDeDados[j] + "</td>"
        }
        Tabela += "</tr>"
    }
    document.getElementById("tabelaPrincipal").innerHTML = Tabela
}