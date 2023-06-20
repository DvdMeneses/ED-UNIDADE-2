vetorAux = [1,4,2,3,6,9,10]


function MergeSort(vetor){
    if(vetor.length === 1){
        return vetor;
    }


    let mid = Math.floor(vetor.length/2);
    
    let esquerda = vetor.slice(0,mid);
    let direita  = vetor.slice(mid,vetor.length);

    return Merge(MergeSort(esquerda),MergeSort(direita));

}

function Merge(esquerda,direita){

    let resultado = [];
    let iE = 0;
    let iD = 0;

    while(iE < esquerda.length && iD < direita.length){
        if(esquerda[iE] < direita[iD]){
            resultado.push(esquerda[iE]);
            iE++;
        }else{
            resultado.push(direita[iD]);
            iD++;
        }
    }

    while(iE < esquerda.length){
        resultado.push(esquerda[iE]);
        iE++;
    }
    

    while(iD < direita.length){
        resultado.push(direita[iD]);
        iD++;
    }

    return resultado;
}

console.log(MergeSort(vetorAux))