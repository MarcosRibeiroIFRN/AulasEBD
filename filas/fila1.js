class Fila {
    constructor(){
        this.vetor=[]

    }
    enfileirar(objeto){
        this.vetor.push(objeto)
    }
    desenfileirar(){
        if (this.estaVazia()){
            console.log("Fila vazia");
            return null;
        }
        return this.vetor.shift
    }
    estaVazia(){
        return this.vetor.length===0
    }
}