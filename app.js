//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Iniciando com as variáveis
let listaSorteados = [];
let totalNomes = 0;
let lista = document.querySelector('ul');

// Iniciar o array listaSorteados
function adicionandoAmigo() {
    var amigoSecreto = document.querySelector('input').value;
    if(amigoSecreto == '') {
        alert("Por favor, insira um nome.");
        console.log(listaSorteados);
    } else {
        listaSorteados.push(amigoSecreto);
        alert("O nome: " + amigoSecreto + " foi adicionado.");
        console.log(listaSorteados);
        totalNomes = listaSorteados.length;
        console.log(totalNomes);
        listaAmigos();
    }
    limpezaCaixa();
}

listaHTML();

// Limpar o campo de input
function limpezaCaixa() {
    amigoSecreto = document.querySelector('input');
    amigoSecreto.value = '';
}

// Colocar o array na lista HTML e exibir na pagina
function listaAmigos() {
    lista.innerHTML = "";
    for (var i = 0; i < listaSorteados.length; i++) {
        var itemHTML = document.createElement('li');
        itemHTML.appendChild(document.createTextNode(listaSorteados[i]));
        lista.appendChild(itemHTML);
    }
}

// Sortear amigo aleatoriamente
function sorteioAmigoSecreto() {
    if(listaSorteados == ""){
        adicionandoAmigo();
    } else {
        var nomeSorteado = Math.floor(Math.random() * totalNomes);
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        lista.innerHTML = "";
        var resultadoHTML = document.createElement('li');
        resultadoHTML.appendChild(document.createTextNode("O amigo sorteado foi: "));
        resultadoHTML.appendChild(document.createTextNode(listaSorteados[nomeSorteado]));
        resultado.appendChild(resultadoHTML);
        console.log(nomeSorteado);
        console.log(listaSorteados [nomeSorteado]);
    }
}