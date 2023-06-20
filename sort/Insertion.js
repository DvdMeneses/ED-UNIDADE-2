vetorAux = [10,20,3,49,2]
tamanho = vetorAux.length ;

for(let i = 1; i < tamanho ;i++){
    escolhido = vetorAux[i];
    

    j = i-1;
    while(j >= 0 &&  vetorAux[j]  > escolhido){
        vetorAux[j+1] = vetorAux[j]
        j = j-1
    }

    vetorAux[j+1] = escolhido
}

console.log(vetorAux)