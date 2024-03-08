const vetor=[1,2,3,4,5]

function inverterVetor(vetor){
    if (vetor.lenght<=1){
        return vetor;
    }
    let fim=vetor.lenght-1
    let inicio =0
    while(inicio<fim){
        let temp =vetor[inicio]
        vetor[fim]=vetor[inicio]
        vetor [inicio]=temp
        inicio ++;
        fim--;
    }
    return vetor
}
console.log(inverterVetor(vetor))