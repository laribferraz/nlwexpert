const perguntas = [
  {
    pergunta: "O que é o princípio da presunção de inocência?",
    respostas: [
      "O réu é considerado culpado até provar sua inocência",
      "O réu é considerado inocente até que sua culpa seja comprovada",
      "O réu é automaticamente inocente"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do habeas corpus?",
    respostas: [
      "Proteger contra prisões ilegais ou arbitrárias",
      "Julgar crimes de corrupção",
      "Garantir a liberdade de expressão"
    ],
    correta: 0
  },
  {
    pergunta: "O que é a prescrição em direito penal?",
    respostas: [
      "É o tempo em que o réu fica preso preventivamente",
      "É o tempo após o qual uma ação penal não pode mais ser movida",
      "É o prazo para o réu apresentar sua defesa"
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza a responsabilidade civil?",
    respostas: [
      "A responsabilidade exclusiva do Estado",
      "A obrigação de indenizar por danos causados a terceiros",
      "A penalidade por infrações criminais"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o princípio da legalidade?",
    respostas: [
      "A aplicação de penas sem base legal",
      "A submissão às leis vigentes",
      "A dispensa de legislação em determinados casos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal função do Ministério Público?",
    respostas: [
      "Defender os interesses do réu",
      "Promover a justiça e a defesa da ordem jurídica",
      "Atuar como advogado do governo"
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma súmula vinculante?",
    respostas: [
      "Uma decisão que não obriga os tribunais",
      "Uma orientação jurisprudencial de caráter obrigatório",
      "Um parecer sem efeito legal"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o habeas data?",
    respostas: [
      "A garantia de acesso a informações pessoais",
      "A proibição de prisões preventivas",
      "A anulação de condenações criminais"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o direito de representação?",
    respostas: [
      "A faculdade de atuar como representante do Ministério Público",
      "O direito de representar graficamente uma situação",
      "A possibilidade de denunciar crimes, mesmo sem ser a vítima"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o devido processo legal?",
    respostas: [
      "A garantia de um processo rápido",
      "O respeito aos direitos fundamentais no decorrer do processo",
      "A obrigatoriedade de seguir procedimentos não previstos em lei"
    ],
    correta: 1
  }
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }