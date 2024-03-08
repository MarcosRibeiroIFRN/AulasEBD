

const vetor=[-3,4,-1,-3]

function maiorsequencia(vetor){
    let max =0
    let maxatual=vetor[0]
    const sub=[]
    sub[0]=vetor[0]
    for (let i =1;i<vetor.length;i++){
        maxatual=vetor[i]+vetor[i-1]
        if(max<maxatual){
            max=maxatual

            sub[sub.length]=vetor[i]
            
        }
    }
    return max
    
}
console.log(maiorsequencia(vetor))