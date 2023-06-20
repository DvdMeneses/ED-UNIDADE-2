vetorAux = [0,1,2,3,4,5,6,7,8,9,10];

function BuscaSequancial(chave,vetor){
    for(i = 0 ; i < vetor.length; i ++){
        if(vetor[i]==chave){
            return "ELEMENTO "+ vetor[i] + " ENCONTRADO";
        }
    }
    return -1;
}

console.log(BuscaSequancial(2,vetorAux));