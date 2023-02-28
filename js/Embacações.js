import { tabela} from "./Batalha_Naval";
//TODO: [Importar os dados abaixo do arquivo Batalha_Naval.js]
const tamanhoMapa = 10; 


class Embarcação
{ 
    constructor(quantidadeEmbarcações ,quantidadeEspaços , letraEmbarcação)
    {
        this.quantidadeEmbarcações = quantidadeEmbarcações;
        this.quantidadeEspaços = quantidadeEspaços;
        this.letraEmbarcação = letraEmbarcação;
    }
    teste(){console.log("Teste")}
    addEmbarcações()
    {
        quantidadeEmbarcações = this.quantidadeEmbarcações;
        quantidadeEspaços = this.quantidadeEspaços;
        letraEmbarcação = this.letraEmbarcação;
        let espaçoLivre = false;
        for(let j = 0; j < quantidadeEmbarcações; j++)
        {
            let horizontal = true;
            let randomico = random(0,2);
            
            if (randomico == 0) 
                horizontal = true;
            else
                horizontal = false;

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
            else
            {
                
                //O número máximo do random está contido no conjunto de possibilidades para embarcação, por isso o +1
                let x = random(0, tamanhoMapa);
                let y = random(0, tamanhoMapa - quantidadeEspaços + 1);    
                
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
                    j--
                }
            }
        }
    }
    random(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //valor min incluso, mas max não
    }

}