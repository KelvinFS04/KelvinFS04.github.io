
//variáveis no escopo global
const tamanhoMapa = 10;
let mapa = new Array(); 

//array de arrays, equivalente a uma matriz para o mapa
for (let i = 0; i < tamanhoMapa; i++) {
    vetor = new Array();
    mapa.push(vetor);
    for(let j = 0; j < tamanhoMapa; j++) {
        vetor.push("A");
    }
}

//criando o elemento tabela
let tabela = document.createElement("table");
tabela.setAttribute("id", "mapa");
for (let k = 0; k < tamanhoMapa; k++) 
{
    let idLinha = "linha" + k; 
    let linha = tabela.insertRow();
    linha.setAttribute("id", idLinha);
    for (let l = 0; l < tamanhoMapa; l++) 
    {
        let idCélula = "célula" + k + l;
        let idBotão = "" + k + l;
        let célula = linha.insertCell();
        célula.setAttribute("id", idCélula);
        célula.innerHTML = '<button id="' + idBotão + '" class="botões" onclick="ataque(this.id)">A</button>';
    }
    let divMapa = document.getElementById("divMapa");
    divMapa.appendChild(tabela);
}

//função de ataque ao bot
function ataque(id)
{   
    console.log("Ataque na célula: " + id);   
}

class EmbarcacaoBot
{ 
    constructor(quantidadeEmbarcações ,quantidadeEspaços , letraEmbarcação)
    {
        this.quantidadeEmbarcações = quantidadeEmbarcações;
        this.quantidadeEspaços = quantidadeEspaços;
        this.letraEmbarcação = letraEmbarcação;
    }
    random(min, max)
    {
        min = Math.ceil(min);//arredonda para cima
        max = Math.floor(max);//arredonda para baixo
        return Math.floor(Math.random() * (max - min) + min);
        //valor min incluso, mas max não
    }
    addEmbarcação()
    {
        let quantidadeEmbarcações = this.quantidadeEmbarcações;
        let quantidadeEspaços = this.quantidadeEspaços;
        let letraEmbarcação = this.letraEmbarcação;
        let espaçoLivre = false;
        for(let j = 0; j < quantidadeEmbarcações; j++)
        {
            let horizontal = true;
            let randomico = this.random(0,2);
            
            if (randomico == 0) 
                horizontal = true;
            else
                horizontal = false;

            if(horizontal == true)
            {
                //O número máximo do random está contido no conjunto de possibilidades pra embarcação, por isso o +1
                let x = this.random(0, tamanhoMapa - quantidadeEspaços + 1);
                let y = this.random(0, tamanhoMapa);    
                
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
            else
            {
                
                //O número máximo do random está contido no conjunto de possibilidades para embarcação, por isso o +1
                let x = this.random(0, tamanhoMapa);
                let y = this.random(0, tamanhoMapa - quantidadeEspaços + 1);    
                
                //for de validação da posição randomica
                for(let k = 0; k < quantidadeEspaços; k++)
                {
                    if (mapa[y + k][x] == "A") 
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
                        mapa[y + l][x] = letraEmbarcação;                    
                    }

                }
                else
                {
                    j--;
                }
            }
        }
    }
    

}

//testes
let tst1 = new EmbarcacaoBot(1, 1, 't');
let tst2 = new EmbarcacaoBot(1, 2, 't');
let tst3 = new EmbarcacaoBot(1, 3, 't');
tst1.addEmbarcação();
tst2.addEmbarcação();
tst3.addEmbarcação();
console.log(mapa)