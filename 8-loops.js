console.log('\nTrabalhando com condicionais');//mensagem de inicio

const listaDeDestinos = new Array(//cria uma lista
    'Salvador',
    'São Paulo',  //itens da lista 
    'Rio de Janeiro'
);
const idadeComprador = 18; //variavel de idade do comprador 
const estaAcompanhada = false; //condição para verificação de menor
let temPassagemComprada = false; //condição que verifica se o mesmo possui passagem comprada
const destino = "Rio de Janeiro" //aqui nomeamos a variavel destino como Rio mas poderia ser atribuido outra cidade

console.log("\nDestinos possíveis:"); //mensagem seguinte que mostram os destinos na array conforme esta abaixo
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //a variavel que permite a compra, tem de ser com idade do comprador superior ou igual a 18.

let contador = 0;
let destinoExiste = false;
while(contador<3){  //enquanto o contador for menor que 3
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true; //e o destino for verdadeiro
        break; //quebra o fluxo
    }else{
        console.log("Destino não existe"); //senão exibimos esta mensagem caso ele não exista
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste); //variavel que exibe o destino existente

if(podeComprar && destinoExiste){ //destino existe + a possibilidade de compra
    console.log("Boa viagem"); //exibimos
}else{
    console.log("Desculpe tivemos um erro!"); //senão tivemos um erro na compra
}
for(let cont = 0; cont < 3; cont ++){ //tive um pouco de dificuldade aqui mas acredito que se for menor que 3 e ele existir quebramos o fluxo 
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }else{
        console.log("Destino não existe"); //caso o contrário exibimos que não existe
    }
}