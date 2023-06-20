vetorAux = [8,7,6,5,4,3,2,1];

// inferior = 0
function QuickSort(vetorAux,inferior,superior){//supondo que o user passou a posicao do superior correta(vetor.length-1)
    let pos_pivo;

    if(inferior < superior){
        pivo = vetorAux[superior]

        let  i , j;

        i= inferior-1; // isso vai ser incrementado cada vez que encontrarmos um objeto menor que o pivo

        for(j = inferior;j <= superior-1;j++){// so vai ate superior-1 pq igonora o pivo que é o superior
            
            if(vetorAux[j]<= pivo){
                i++;
               troca(vetorAux,j,i); 

            }
        }

        troca(vetorAux,superior,i+1);
        pivo_pos = i+1;
        QuickSort(vetorAux,inferior,pivo_pos-1);
        QuickSort(vetorAux,pivo_pos+1,superior);
    }
}

console.log(vetorAux)

function troca(vetorAux,posJ,posI){
    aux = vetorAux[posI]
    vetorAux[posI]=vetorAux[posJ]
    vetorAux[posJ] = aux;
}



QuickSort(vetorAux,0,vetorAux.length-1)
console.log(vetorAux);