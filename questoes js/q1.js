
class vet{
    Constructor(){
        this.vetor=[1,2,3,4]
    }
    inserirFinal(valor) {
        this.vetor[this.vetor.length]=valor
    }

    retirarFinal(){
        delete this.vetor[this.vetor.length]
    }
    inserirInicio(valor) {
         a [0]=valor

        for(let i=0;i<this.vetor.length;i++){
            a[i+1]=this.vetor[i]
        }
    }
    retirarFinal(){
        delete this.vetor[0]
    }
}
module.exports = vet