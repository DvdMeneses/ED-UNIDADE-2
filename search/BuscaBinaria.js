vetorAux = [0,1,2,3,4,5,6,7,8,9,10];// vetor tem que esta ordenado

function BuscaBinaria(chave,vetor){
    let esquerda = -1;
    let direita = vetor.length;
    
    while(esquerda < direita-1){
        meio = Math.floor((esquerda + direita)/2);
      
        if(chave > vetor[meio]){
            esquerda = meio;
        }else{
            direita = meio ;
        }

    }

    return vetor[direita];
}

console.log(BuscaBinaria(10,vetorAux));