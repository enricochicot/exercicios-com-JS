console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(//cria uma lista
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");

console.log(listaDeDestinos);

if(idadeComprandor >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1,1); //removendo itens
}else{
        console.log("Não é maior de idade, não posso vender");
}

console.log ("Embarque: \n")
if(idadeComprador >18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);


