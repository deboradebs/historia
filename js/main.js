import {aleatorio} from  "./aleatorio.js";
import {perguntas} from "./pergunta.js";
const caixaPincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternetivas = document.querySelector(".caixa-resultado")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-principal")






let atual = 0;
let perguntaAtual;
let historiaFinal = " " 

function mostraPergunta(){
    if(atual >= perguntas.length){
        return
    }
    perguntaAtual = perguntas[atual] 
    caixaPerguntas.textContent = perguntaAtual.enunciado


}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button")
    botaoAlternativas.textContent =alternativa.texto
    botaoAlternativas.addEventListener("click," ()=> respostaSelecionado)
    caixaAlternetivas.appendChild(botaoAlternativas)

    }
       
}
{
    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao
        historiaFinal += afirmacoes + " "
        atual++
        mostraPergunta()
     
    }
}
function mostraResultado(){
    caixaPerguntas.textContent ="Em 2049..."
    textoResultado.textContent = historiaFinal
    caixaAlternetivas.textContent ="";
}

mostraPergunta()