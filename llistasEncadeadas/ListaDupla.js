import NoDuplo from "./NoDuplo.js";


// console.log(new NoDuplo(3))

class ListaDupla{
    constructor(){
        this.inicio=null;
        this.final=null;
    }
    inserirInicio(valor){
        const novoNO=new NoDuplo(valor);
        // se início está vazio
        if(this.inicio===null){
            this.inicio=novoNO;
            this.final=novoNO;
        }
    }
}