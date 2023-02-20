//com as quantidade de embarcações e váriaveis para a validação dessa forma, possíveis mudanças serão mais simples
const quantidadeSubmarinos = 5; const quantidadeEspaçosSubmarino = 1; const letraSubmarino = "S";
const quantidadeTorpedeiros = 4; const quantidadeEspaçosTorpedeiros = 2; const letraTorpedeiro = "T";
const quantidadeCruzadores = 3; const quantidadeEspaçosCruzadores = 3; const letraCruzador = "C";
const quantidadePortaAviões = 2; const quantidadeEspaçosPortaAviões = 4; const letraPortaAviões = "P";
let horizontal = true;
let espaçoLivre = false;
const tamanhoMapa = 10;
//array de arrays, equivalente a uma matriz para o mapa
let mapa = new Array(); 
for (let i = 0; i < tamanhoMapa; i++) {
    vetor = new Array();
    mapa.push(vetor);
    for(let j = 0; j < tamanhoMapa; j++) {
        vetor.push("A");
    }
}


//função de ataque ao bot
function ataque(id)
{
    // TODO: [Terminar função de ataque]
    console.log("Ataque na célula: " + id);
}


//função que gera o mapa
function geraMapa()
{
    //criando o elemento tabela
    let tabela = document.createElement("table");
    tabela.setAttribute("id", "mapa");

    //criando as rows e cells da tabela
    for (let k = 0; k < tamanhoMapa; k++) 
    {
        let idLinha = "linha" + k; 
        let linha = tabela.insertRow();
        linha.setAttribute("id", idLinha);
        for (let l = 0; l < tamanhoMapa; l++) 
        {
            let idCélula = "célula" + k + l;
            let idBotão = "botão" + k + l;
            let classBotão = "botão" + k + l;
            let célula = linha.insertCell();
            célula.setAttribute("id", idCélula);
            // TODO: [Trocar o "A" por uma img]
            // TODO: [Trocar lógica de atribuição da função ataque] 
            célula.innerHTML = '<button id="' + idBotão + '" class="' + classBotão + '" onclick="ataque(this.id)">A</button>';
        }
        let divMapa = document.getElementById("divMapa");
        divMapa.appendChild(tabela);
    }

    adicionaEmbarcaçõesBot();
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
                    break;
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
        // TODO: [Adiconar vertical]
        else
        {
        }
    }
}

//função randomica
function random(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
    //valor min incluso, mas max não
}