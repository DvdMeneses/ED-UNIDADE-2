class Registro{
    constructor(dado,chave){
        this.dado = dado;
        this.chave = chave;
    }
}



class TabelaHash{
    constructor(){
        this.tabela = [];
        this.size = 5;
    }

    funcaoHash(palavra){
        let soma = 0;
        for(let i = 0 ; i < palavra.length;i++ ){
            soma += palavra.charCodeAt(i) *31;
        }

        return soma % this.size;
    }

    add(dado,chave){
        let registroAux = new Registro(dado,chave);
        let indexHashDoRegistro = this.funcaoHash(chave);
        let variavelControle = 0;
        

        while (// teste para achar uma posicao vazia apartir do index hash calculado
        variavelControle < this.size && (this.tabela[indexHashDoRegistro] != null /*posiçao nao vazia */ && this.tabela[indexHashDoRegistro] != undefined)/*posicao nao vazia */
		) {
			
      
            // anda no vetor 
                indexHashDoRegistro++;
            // variavel de controle para da stop no codigo , pois se o vetor estiver cheio ele nunca para
                variavelControle++;

            // volta para o inicio quando o passo estiver no tamanho do vetor
                indexHashDoRegistro %= this.size; // qualquer numero menor que o size vai ser igual numero
                // ex se for 6 % 20  o resultado eh 6
                //    se for 5 % 20  o resultado eh 5
            //
            console.log(indexHashDoRegistro)
            console.log("Deus me ama n vai da erro");
		}

        this.tabela[indexHashDoRegistro]= registroAux;
        console.log(this.tabela);
        console.log("-----------------------------------------------");

    }

    remove(chave){
        // pegar o codigo hash da chave fornecida
            let indexHashDoRegistro = this.funcaoHash(chave);
            let variavelControle = 0;


        // percorrer o vetor atras do  elemento pois nao necessariamente o elemento vai estar na posicao do index hash, pode ter sido deslocado a frente
        //d
        while( variavelControle < this.size && (this.tabela[indexHashDoRegistro] != null && this.tabela[indexHashDoRegistro] != undefined)){
            if(chave === this.tabela[indexHashDoRegistro].chave){
                //atribui um  vazio (null) no lugar do item a ser removido
                this.tabela[indexHashDoRegistro] = null;
                console.log(this.tabela);
                console.log("----------------------------t-------------------");
		        return true;
                

            }

            // proximo elemento 
            indexHashDoRegistro++;
            variavelControle++;

            indexHashDoRegistro %= this.size;
        }
        console.log(this.tabela);
        console.log("-----------------------f------------------------");
		return false;
        
    }

    get(chave){
        //v
        let indexHashDoRegistro = this.funcaoHash(chave);
        let variavelControle = 0;

        while(variavelControle < this.size && (this.tabela[indexHashDoRegistro]!= null && this.tabela[indexHashDoRegistro]!= undefined)){
            if(chave === this.tabela[indexHashDoRegistro].chave ){
                return this.tabela[indexHashDoRegistro];
            }
            indexHashDoRegistro++;
            variavelControle++;
            indexHashDoRegistro %= this.size;

        }
        return undefined;

    }
}

let f = new TabelaHash();
//d
f.add({ nome: "taniro", idade: 35 },"nome" );
f.add({ nome: "abc", idade: 5 },"abc" );
f.add({ nome: "a", idade: 1 },"a" );
f.add({ nome: "P", idade: 1 },"P" );
f.add({ nome: "B", idade: 1 },"B" );
f.add({ nome: "C", idade: 1 },"C" );
console.log(f.remove("nome"));
f.add({ nome: "taniro", idade: 35 },"nome" );
console.log(f.get("nome"));





