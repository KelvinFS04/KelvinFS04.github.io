let vetorDeDados = []

function digitoDeEntrada(event){
    if (event.keyCode == 13){
        botãoDeEntrada();
    }
}

function botãoDeEntrada(){
    let aux = parseInt(document.getElementById("entrada").value)
    vetorDeDados.push(aux)
    vetorDeDados.sort(ordenador)
    document.getElementById("entrada").value = ""
    console.log(vetorDeDados[vetorDeDados.length - 1])
    atualizaTabela()
}

function atualizaTabela(){
    htmlTabela = ""
    for (let j = 0; j < vetorDeDados.length;){
        htmlTabela += "<tr>"
        for (let i = 0; i < 5; i++, j++){
            if (j >= vetorDeDados.length){
                break
            }
            htmlTabela += "<td>" + vetorDeDados[j] + "</td>"
        }
        htmlTabela += "</tr>"
    }
    document.getElementById("tabelaPrincipal").innerHTML = htmlTabela
}

function ordenador(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
