import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Què són les tres tipus d'operacions que pot realitzar un ordinador?",
    options: [
      "Operacions aritmètiques, lògiques i d'emmagatzematge/recuperació",
      "Operacions matemàtiques, físiques i químiques",
      "Operacions d'entrada, processament i sortida",
      "Operacions binàries, decimals i hexadecimals"
    ],
    correctAnswer: 0,
    category: "Introducció a la programació"
  },
  {
    id: 2,
    question: "Què és un algorisme?",
    options: [
      "Un programa escrit en un llenguatge de programació",
      "La descripció exacta de la seqüència de passos per resoldre un problema",
      "Un tipus de llenguatge de programació",
      "Una eina per executar programes"
    ],
    correctAnswer: 1,
    category: "Programes i algorismes"
  },
  {
    id: 3,
    question: "Quin és l'únic llenguatge que entén directament l'ordinador?",
    options: [
      "Java",
      "Python",
      "Codi màquina (zeros i uns)",
      "HTML"
    ],
    correctAnswer: 2,
    category: "Llenguatges de programació"
  },
  {
    id: 4,
    question: "Els llenguatges de baix nivell es caracteritzen per:",
    options: [
      "Ser fàcils d'entendre per les persones",
      "Ser independents del maquinari",
      "Ser entendibles directament pel maquinari",
      "Necessitar sempre un intèrpret"
    ],
    correctAnswer: 2,
    category: "Tipus de llenguatges"
  },
  {
    id: 5,
    question: "El llenguatge assemblador és:",
    options: [
      "Un llenguatge d'alt nivell",
      "Un llenguatge de nivell intermig",
      "Un llenguatge de baix nivell",
      "El mateix que el codi màquina"
    ],
    correctAnswer: 1,
    category: "Tipus de llenguatges"
  },
  {
    id: 6,
    question: "Python és un exemple de:",
    options: [
      "Llenguatge de baix nivell",
      "Llenguatge assemblador",
      "Llenguatge d'alt nivell",
      "Codi màquina"
    ],
    correctAnswer: 2,
    category: "Tipus de llenguatges"
  },
  {
    id: 7,
    question: "Què fa un compilador?",
    options: [
      "Executa el programa directament",
      "Tradueix el codi font a codi executable",
      "Només verifica errors sintàctics",
      "Guarda el programa a la memòria"
    ],
    correctAnswer: 1,
    category: "Assembladors i intèrprets"
  },
  {
    id: 8,
    question: "Quina és la principal diferència entre un compilador i un intèrpret?",
    options: [
      "El compilador és més ràpid que l'intèrpret",
      "L'intèrpret genera codi executable, el compilador no",
      "El compilador genera un fitxer objecte, l'intèrpret executa directament",
      "No hi ha diferències significatives"
    ],
    correctAnswer: 2,
    category: "Assembladors i intèrprets"
  },
  {
    id: 9,
    question: "Quina és la primera fase en el desenvolupament d'un programa?",
    options: [
      "Implementació",
      "Disseny",
      "Anàlisi",
      "Documentació"
    ],
    correctAnswer: 2,
    category: "Fases de desenvolupament"
  },
  {
    id: 10,
    question: "Durant la fase d'anàlisi s'estableix:",
    options: [
      "Com ha de fer el programari",
      "Què ha de fer el programari",
      "Amb quin llenguatge programar",
      "Quins errors té el programa"
    ],
    correctAnswer: 1,
    category: "Fases de desenvolupament"
  },
  {
    id: 11,
    question: "La fase de disseny té com a objectiu:",
    options: [
      "Escriure el codi del programa",
      "Definir els requisits del client",
      "Establir com es duran a terme els objectius de l'anàlisi",
      "Provar que el programa funciona"
    ],
    correctAnswer: 2,
    category: "Fases de desenvolupament"
  },
  {
    id: 12,
    question: "La lògica de programació és:",
    options: [
      "Un tipus de llenguatge de programació",
      "La capacitat per expressar la seqüència d'operacions d'un algorisme",
      "Una eina per compilar programes",
      "El procés de depuració d'errors"
    ],
    correctAnswer: 1,
    category: "Disseny d'algorismes"
  },
  {
    id: 13,
    question: "Què és una variable?",
    options: [
      "Un tipus de dada",
      "Una instrucció de control",
      "Una zona de memòria amb un nom assignat que emmagatzema una dada",
      "Un mecanisme per crear algorismes"
    ],
    correctAnswer: 2,
    category: "Dades i variables"
  },
  {
    id: 14,
    question: "En Java, la declaració 'int num;' indica:",
    options: [
      "Que s'assigna el valor 'int' a la variable num",
      "Que es declara una variable de tipus enter anomenada num",
      "Que es calcula el valor de num",
      "Que s'elimina la variable num"
    ],
    correctAnswer: 1,
    category: "Dades i variables"
  },
  {
    id: 15,
    question: "Els diagrames de flux també es coneixen com:",
    options: [
      "Pseudocodi",
      "Ordinogrames",
      "Algorismes",
      "Flowcharts anglesos"
    ],
    correctAnswer: 1,
    category: "Diagrames de flux"
  },
  {
    id: 16,
    question: "El símbol utilitzat per representar l'inici i fi d'un programa en un diagrama de flux és:",
    options: [
      "Un rectangle",
      "Un rombe",
      "Un cercle o oval",
      "Un paral·lelogram"
    ],
    correctAnswer: 2,
    category: "Diagrames de flux"
  },
  {
    id: 17,
    question: "El símbol de procés en un diagrama de flux és:",
    options: [
      "Un rombe",
      "Un rectangle",
      "Un cercle",
      "Un paral·lelogram"
    ],
    correctAnswer: 1,
    category: "Diagrames de flux"
  },
  {
    id: 18,
    question: "El símbol de decisió en un diagrama de flux té forma de:",
    options: [
      "Rectangle",
      "Cercle",
      "Rombe",
      "Triangle"
    ],
    correctAnswer: 2,
    category: "Diagrames de flux"
  },
  {
    id: 19,
    question: "Si tenim l'operació 'intents = intents - 1', què estem fent?",
    options: [
      "Assignant -1 a la variable intents",
      "Restant 1 al valor actual d'intents",
      "Multiplicant intents per -1",
      "Comparant intents amb -1"
    ],
    correctAnswer: 1,
    category: "Casos pràctics"
  },
  {
    id: 20,
    question: "L'operador '%' en programació s'utilitza per:",
    options: [
      "Calcular percentatges",
      "Dividir dos nombres",
      "Calcular el residu de la divisió",
      "Multiplicar per 100"
    ],
    correctAnswer: 2,
    category: "Casos pràctics"
  }
];