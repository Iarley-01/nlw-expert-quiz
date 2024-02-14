const perguntas = [
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "let myVar;",
      "const myVar;",
      "Todas as opções estão corretas"
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'querySelector' faz em JavaScript?",
    respostas: [
      "Seleciona múltiplos elementos do DOM",
      "Seleciona um único elemento do DOM baseado em um seletor CSS",
      "Seleciona elementos com a classe especificada"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a saída do código 'console.log(typeof([]))'?",
    respostas: [
      "'array'",
      "'object'",
      "'array object'"
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "unshift()",
      "concat()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'map' faz em JavaScript?",
    respostas: [
      "Modifica todos os elementos de um array",
      "Cria um novo array com os resultados de uma função aplicada a cada elemento do array",
      "Remove elementos duplicados de um array"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "// This is a comment",
      "/* This is a comment */",
      "'This is a comment'"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
    respostas: [
      "pop()",
      "shift()",
      "slice()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses métodos é usado para concatenar duas ou mais strings em JavaScript?",
    respostas: [
      "join()",
      "concat()",
      "splice()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript para verificar se elas são do mesmo tipo e têm o mesmo valor?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'filter' faz em JavaScript?",
    respostas: [
      "Remove elementos vazios de um array",
      "Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida",
      "Ordena os elementos de um array em ordem alfabética"
    ],
    correta: 1
  }
];

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
//Essa linha procura o elemento com o seletor chamado #quiz e armazena na váriável chamada quiz
const quiz = document.querySelector('#quiz');
//Essa linha captura o elemento HTML com o seletor chamado template
const template = document.querySelector('template');

//Esse bloco for renderiza as perguntas e suas opções na tela 
for(const item of perguntas) {
  //Essa linha clona (cria uma cópia) do template no HTML para cada pergunta
  const quizItem = template.content.cloneNode(true);
  
  //Essa linha serve para alterar o enunciado das perguntas
  quizItem.querySelector('h3').textContent = item.pergunta;
  
  //Esse bloco for renderiza os itens das respostas
  for(let resposta of item.respostas) {
    //Essa linha captura o dt que é os itens das perguntas para cada quiz item
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    //Essa linha renderiza os itens no conteúdo do dt
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      
      corretas.delete(item);
      if(estaCorreta){
        corretas.add(item);
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    }
  
    quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove();
  
  quiz.appendChild(quizItem);
}
