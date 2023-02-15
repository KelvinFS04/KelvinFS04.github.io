

//declarando o mapa
const tamanhoMapa = 10;
let mapa = new Array(); //array de arrays, equivalente a uma matriz
for (let i = 0; i < tamanhoMapa; i++) {
    vetor = new Array();
    mapa.push(vetor);
        for(let j = 0; j < tamanhoMapa; j++) {
            vetor.push("A");
        }
}

//com as quantidade de embarcações do bot e váriaveis para a validação dessa forma facilida possíveis mudanças

const quantidadeSubmarinos = 5; const quantidadeEspaçosSubmarino = 1; const letraSubmarino = "S";
const quantidadeTorpedeiros = 4; const quantidadeEspaçosTorpedeiros = 2; const letraTorpedeiro = "T";
const quantidadeCruzadores = 3; const quantidadeEspaçosCruzadores = 3; const letraCruzador = "C";
const quantidadePortaAviões = 2; const quantidadeEspaçosPortaAviões = 4; const letraPortaAviões = "P";
let horizontal = true;

function embarcaçõesBot() 
{
    torpedeirosBot(quantidadeEspaçosTorpedeiros);
    submarinoBot();  
}
function submarinoBot()
{
    for (let j = 0; j < quantidadeSubmarinos; j++) {
        let x = random(0, tamanhoMapa);
        let y = random(0, tamanhoMapa);

        if (mapa[y][x] == "A") {
            mapa[y][x] = "S";
        }
        else
        {
            i--;
        }
    }
}
function torpedeirosBot(quantidadeEmbarcações ,quantidadeEspaços , letraEmbarcação)
{
    for(let j = 0; j < quantidadeEmbarcações; j++)
    {
        let x = random(0, tamanhoMapa);
        let y = random(0, tamanhoMapa);

        if(horizontal == true)
        {
            
            for(let k = 0; k < quantidadeEspaços; k++)
            if (mapa[y][x] == "A") {
                if(mapa[y][x+k] == "A")
                {
                    mapa[y][x] = ""
                    mapa[y][x+k]
                }
            }
            else
            {
                i--;
            }
        }
        else
        {
            if (mapa[y][x] == "A") {
                mapa[y][x] = "S";
            }
            else
            {
                i--;
            }
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