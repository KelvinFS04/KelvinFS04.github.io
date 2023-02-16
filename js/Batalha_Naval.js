
//com as quantidade de embarcações e váriaveis para a validação dessa forma, possíveis mudanças serão mais simples
const quantidadeSubmarinos = 5; const quantidadeEspaçosSubmarino = 1; const letraSubmarino = "S";
const quantidadeTorpedeiros = 4; const quantidadeEspaçosTorpedeiros = 2; const letraTorpedeiro = "T";
const quantidadeCruzadores = 3; const quantidadeEspaçosCruzadores = 3; const letraCruzador = "C";
const quantidadePortaAviões = 2; const quantidadeEspaçosPortaAviões = 4; const letraPortaAviões = "P";
let horizontal = true;
let espaçoLivre = false;
const tamanhoMapa = 10;
//array de arrays, equivalente a uma matriz
let mapa = new Array(); 
for (let i = 0; i < tamanhoMapa; i++) {
    vetor = new Array();
    mapa.push(vetor);
    for(let j = 0; j < tamanhoMapa; j++) {
        vetor.push("A");
    }
}


//função que gera o mapa
function geraMapa()
{
}


//funções para a criação das embarcações
function adicionaEmbarcaçõesBot() 
{
    embarcaçõesBot(quantidadePortaAviões, quantidadeEspaçosPortaAviões, letraPortaAviões);
    embarcaçõesBot(quantidadeCruzadores, quantidadeEspaçosCruzadores, letraCruzador);
    embarcaçõesBot(quantidadeTorpedeiros, quantidadeEspaçosTorpedeiros, letraTorpedeiro);
    embarcaçõesBot(quantidadeSubmarinos, quantidadeEspaçosSubmarino, letraSubmarino);
    console.log(mapa);
}

function embarcaçõesBot(quantidadeEmbarcações ,quantidadeEspaços , letraEmbarcação)
{
    for(let j = 0; j < quantidadeEmbarcações; j++)
    {
        if(horizontal == true)
        {
            //O número máximo do random está contido no conjunto de possibilidades pra embarcação, por isso o +1
            let x = random(0, tamanhoMapa - quantidadeEspaços + 1);
            let y = random(0, tamanhoMapa);    
            
            //for de validação da posição randomica
            for(let k = 0; k < quantidadeEspaços; k++)
            {
                if (mapa[y][x + k] == "A") 
                {
                    espaçoLivre = true;
                }
                else
                {
                    espaçoLivre = false;
                }
            }

            //if com o posicionamento das embarcações
            if (espaçoLivre == true) 
            {
                for(let l = 0; l < quantidadeEspaços; l++)
                {
                    mapa[y][x + l] = letraEmbarcação;                    
                }

            }
            else
            {
                j--
            }
        }
        else
        {
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