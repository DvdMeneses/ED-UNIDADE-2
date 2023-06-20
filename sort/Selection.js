vetorAux = [5,4,8,1,2,6,7,3];
tamanho = vetorAux.length;


for(let i =0; i < tamanho-1; i++){// fazer a troca verificando se o elemento da vez de i é menor que o menor elemento
    let menorPosicao = i;
    
    for(j = i+1; j < tamanho ; j ++){//percorrer o vetor atras do menor elemento
        if(vetorAux[menorPosicao] > vetorAux[j]){
            menorPosicao = j;
        }

    }
    
    /*if(i != menorPosicao){// so para ele n trocar com ele mesmo
        troca(vetorAux,i, menorPosicao) 
    }*/ // nao precisa fazer a comparação pq ele nunca vai ser igual a ele mesmo pois na verificacao começo com i + 1 
    

    troca(vetorAux,i, menorPosicao) 
}

function troca(vetorAux,posJ,posI){
    aux = vetorAux[posI]
    vetorAux[posI]=vetorAux[posJ]
    vetorAux[posJ] = aux;
}

console.log(vetorAux)


