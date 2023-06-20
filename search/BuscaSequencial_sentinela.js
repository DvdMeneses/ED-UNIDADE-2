vetorAux = [1,2,3,4,5,6,7,8,9,10];

// aqui tentamos remover uma operação que no caso é o if feito no for que verifica a cada elemento
// se o elemento consta no vetor , o que é feito é que adicionamos o elemnto no final do vetor 
// dessa forma deixamos ele percorrer o vetor todo elemento por elemento , mas se a chave so for encontrada no final
// que é onde esta o elemento ficticio é retornado -1 , pois o elemento nao consta no vetor.

function BuscaSequancial_sentinela(chave,vetor){
    tam = vetor.length;
    vetor[tam] = chave
    console.log(tam);
    
    i = 0
    while (vetor[i]!= chave){// vai no laço atras do elemento 
        i += 1 
    }
    
    /* FICA MAIS INTTUITIVO COM O WHILE
    for(i; chave != vetor[i];i++){
        // ficaria vazio so para incrementar o i
    }*/

    if(i == tam){// se o elemento encontrado for o ficticio ele fala que n encontrou
        return -1
    }

    return "ELEMENTO "+ vetor[i] + " ENCONTRADO";
}

console.log(BuscaSequancial_sentinela(2,vetorAux));