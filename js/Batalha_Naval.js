

//declarando o mapa
const tamanhoMapa = 10;
let mapa = new Array();
for (let i = 0; i < tamanhoMapa; i++) {
    vetor = new Array();
    mapa.push(vetor);
        for(let j = 0; j < tamanhoMapa; j++) {
            vetor.push("A");
        }
}

//embarcações bot
const quantidadeSubmarinos = 5;
function embarcaçõesBot() 
{
    submarinoBot();  
}

function submarinoBot()
{
    for (let i = 0; i < quantidadeSubmarinos; i++) {
        let x = random(0, tamanhoMapa);
        let y = random(0, tamanhoMapa);

        if (mapa[x][y] == "A") {
            mapa[x][y] = "S";
        }
        else
        {
            i--;
        }
    }
}

function random(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
    //valor min incluso, mas max não
}