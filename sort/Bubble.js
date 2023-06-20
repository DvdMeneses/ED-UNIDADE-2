vetorA  = [1,2,10,6,8];

size =vetorA.length-1;

while(size >=0){
    for(let i = 0; i < size;i++){
        if(vetorA[i] > vetorA[i+1]){
            aux = vetorA[i+1];
            vetorA[i+1] = vetorA[i]
            vetorA[i] = aux;
            
        }
    }
    size--;
}

console.log(vetorA);
