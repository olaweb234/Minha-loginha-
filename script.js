function alternar(produto, acao){

    const qtd = document.getElementById('quantidade_'+ produto)
    const valor =document.getElementById('valor_'+ produto)
    const total = document.getElementById('total_'+ produto)
    if(acao=='-' && qtd.innerHTML==0){
        alert('Quantidade não pode ser menor do que 0 ') 
    }
    else{
       acao == '+'? qtd.innerHTML ++ :  qtd.innerHTML --
       
       const valortotal=qtd.innerHTML * somentenumeto(valor.innerHTML)
       total.innerHTML=formartarvalor(valortotal)
       somar()
    }

   

   

}

function somar(){
  let soma=0
 for(let i=1;  i<4; i++){
    let numero=somentenumeto(document.getElementById('total_'+i).innerHTML)
    soma+=Number(numero)
 }
 document.getElementById('subtotal').innerHTML = formartarvalor(soma)     

}

function somentenumeto(n){
    return n.replace(/\D/g,'')

}

function formartarvalor(n){
    return'R$' + n.toLocaleString('pt-BR')
}