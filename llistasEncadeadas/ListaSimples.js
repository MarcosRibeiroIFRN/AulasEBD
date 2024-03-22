class No{
    constructor (valor){
        this.valor=valor;
        this.proximo=null;
    }
}
class ListaEncadeada{
    constructor(){
        this.cabeca=null;
    }
    inserirInicio(valor){
        let no =new No(valor);
        no.proximo=this.cabeca;
        this.cabeca=no;
    }
    paraArray(){
        let array =[]
        //pega o nó joga em uma variavel auxiliar, e joga dentro de um laço para achar o próximo e guardar no array
        let no =this.cabeca
        array.push(no.valor);
        while(no.proximo!=null){
            no=no.proximo;
            array.push(no.valor);
        }
        return array;
    }
    // implementar esses métodos
    inserirFim(valor){
// inserir no fim
        if (this.estaVazio()){
            this.inserirInicio(valor);
        }else{
            let no =this.cabeca
            while(no.proximo!=null){
                no=no.proximo;
                no.proximo=new No (valor);
            }
        }
    }

    estaVazio(){    
        // se está vazio
        return this.cabeca==null?true : false;
    }
    tamanho(){

    }
    valorIndice(indice){
        // passa o indice e ele tem que devolver o valor que está naquela posição do indice

    }
    contem(valor){
        //se o valor está contido
    }
}
