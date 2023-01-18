let carta1 = {
    nome: 'Buzz',
    imagem: 'https://cdn.leroymerlin.com.br/products/adesivo_de_parede_1431_toy_story_4_buzz_edantex_1566902281_1656_300x300.jpg',
    atributos: {
        ataque: 7,
        defesa: 9,
        agilidade: 6,
    }
}

let carta2 = {
    nome: 'Woody',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/f/fe/Woody_toy_story_3.jpg',
    atributos: {
        ataque: 5,
        defesa: 7,
        agilidade: 8,
    }
}

let carta3 = {
    nome: 'Jessie',
    imagem: 'https://jonnegroni.com/wp-content/uploads/2014/02/ts2-jessie-toy-story-11336601-474-324.jpg',
    atributos: {
        ataque: 9,
        defesa: 6,
        agilidade: 8,
    }
}

let carta4 = {
    nome: 'Zurg',
    imagem: 'https://static.wikia.nocookie.net/disney/images/c/c5/Toy-story2-disneyscreencaps.com-8243.jpg/revision/latest/top-crop/width/360/height/360?cb=20130508003153',
    atributos: {
        ataque: 10,
        defesa: 6,
        agilidade: 5
    }
}

let cartas = [carta1, carta2, carta3, carta4]
let cartaMaquina
let cartaJogador

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * cartas.length)
        while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
        }
    cartaJogador = cartas[numeroCartaJogador]
    document.getElementById('sortearBtn').disabled = true
    document.getElementById('jogarBtn').disabled = false
    exibirCartaJogador()
}


function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName('atributo')

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value 
        }
    }
}

function jogar() {
    
    let atributoSelecionado = obtemAtributoSelecionado()
    let elementoResultado = document.getElementById('resultadoTexto')
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = `Você venceu!`
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = `Você perdeu.` 
    } else {
        elementoResultado.innerHTML = `Empatou!`
    }

    document.getElementById('jogarBtn').disabled = true
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById('imagem-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let divAtributosJogador = document.getElementById('atributos-jogador')
    let tagHTML = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = ''
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo +  "  " + cartaJogador.atributos[atributo] + "</br>"
    } 

    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divAtributosJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById('imagem-maquina')
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    let divAtributosMaquina = document.getElementById('atributos-maquina')
    let tagHTML = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = ''
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo +  "  " + cartaMaquina.atributos[atributo] + "</p>"
    } 

    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divAtributosMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>"
}