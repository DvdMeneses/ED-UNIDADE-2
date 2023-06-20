class No{
    constructor(dado){
        this.dado = dado;
        this.arvoreDireita = null;
        this.arvoreEsquerda = null;
    }
}

class ArvoreBinariaBuscae{
    constructor(){
        this.raiz = null;
    }

    insert(dado){
        let novoNo = new No(dado);

        if(this.raiz == null){
            this.raiz = novoNo;
        }else{
            this.insertNo(this.raiz,novoNo);
        }
    }

    insertNo(no,novoNo){
        if(novoNo.dado < no.dado){
            if(no.arvoreEsquerda == null){
                no.arvoreEsquerda =  novoNo;
            }else{
                this.insertNo(no.arvoreEsquerda,novoNo);
            }
            
        }else{
            if(no.arvoreDireita == null){
                no.arvoreDireita = novoNo;
            }else{
                this.insertNo(no.arvoreDireita,novoNo);
            }
        }
    }


    findMinNode(No){
        while(No  && No.arvoreEsquerda != null){
            No = No.arvoreEsquerda;
        }

        return No;
    }

    findMaxNo(No){
        while(No && No.arvoreDireita != null){
            No = No.arvoreDireita;
        }

        return No;
    }

    remove(dado){
        this.removeNo(this.raiz,dado);
    }

    removeNo(no,dado){
        if(this.no == null){
            return null
        }

        if(dado < no.dado){
            no.arvoreEsquerda == this.removeNo(no.arvoreEsquerda,dado);
        }else if( dado > no.dado){
            no.arvoreDireita = this.removeNo(no.arvoreDireita,dado);
        }else{
            // caso 1 
            if(no.arvoreEsquerda == null  && no.arvoreDireita == null){
                no =  null
                return no;
            }

            if(no.arvoreEsquerda ===  null){

            }


            //caso 3 
            let aux = this.findMinNode(no.arvoreDireita);
            no.dado = aux.dado;
            no = this.removeNo(no.arvoreDireita,aux.dado);
            return no;
        }
    }


    height(){
        if(this.raiz === null){
            return -1;
        }else{
            return this.heightNo(this.raiz);
        }
    }

    heightNo(raiz){
        if(raiz == null){
            return -1;
        }else{
            let alturaEsquerda = this.heightNo(raiz.arvoreEsquerda);
            let alturaDireita = this.heightNo(raiz.arvoreDireita);

            if(alturaDireita > alturaEsquerda){
               return alturaDireita +1; 
            }else{
                return alturaEsquerda+1;
            }

        }
    }
}

let arvore = new ArvoreBinariaBuscae();

console.log("Altura é " + arvore.height());

arvore.insert(50);
console.log("Altura é " + arvore.height());
arvore.insert(30);
arvore.insert(10);
arvore.insert(40);
arvore.insert(80);
arvore.insert(90);
console.log("Altura é " + arvore.height());