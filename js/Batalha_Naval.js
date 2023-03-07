
//variáveis no escopo global
const tamanhoMapa = 10;
let mapa = new Array(); 
let embarcações = new Array();

//array de arrays, equivalente a uma matriz, para o mapa
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
    let y = id.substring(1);
    let x = id.substring(0,1);

    for (let i = 0; i < embarcações.length; i++) 
    {
        if (embarcações[i].posições.includes(x +''+ y)) 
        {
            embarcações[i].HP --;
            console.log(embarcações);
            break;
        }
        
    }
    document.getElementById(id).disabled = true;
    console.log(id)
    console.log("deveria ter desabilitado")
    exibição(id)
}
function exibição(id)
{     
    let y = id.substring(1);
    let x = id.substring(0,1);

    for (let i = 0; i < embarcações.length; i++) 
    {
        
    }  
}

class EmbarcacaoBot
{ 
    constructor(quantidadeEmbarcações ,quantidadeEspaços , letraEmbarcação)
    {
        this.quantidadeEmbarcações = quantidadeEmbarcações;
        this.quantidadeEspaços = quantidadeEspaços;
        this.letraEmbarcação = letraEmbarcação;
        this.posições = new Array();
        this.HP = quantidadeEspaços;
        this.afundou = false;
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
                        let soma = x + l
                        this.posições[l] = y + '' + soma + ''              
                    }

                }
                else
                {
                    j--
                }
            }
            else
            {
                
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
                        let soma = y + l
                        this.posições[l] =  soma + '' + x + '';
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
embarcações.push(tst1);
let tst2 = new EmbarcacaoBot(1, 2, 't');
embarcações.push(tst2);
let tst3 = new EmbarcacaoBot(1, 3, 't');
embarcações.push(tst3);
tst1.addEmbarcação();
tst2.addEmbarcação();
tst3.addEmbarcação();
console.log(mapa)
console.log(embarcações)