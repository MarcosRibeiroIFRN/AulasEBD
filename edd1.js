class Pessoa{
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade


    }

     caminhar () {
        console.log(this.nome + " está me mamando ")
    }

    par = (n) => n % 2 == 0 ? console.log("Número par") : console.log("Número impar");

}
let pessoa = new Pessoa("marcos", 24)
console.log(pessoa.nome)
pessoa.caminhar()

pessoa.par(2)