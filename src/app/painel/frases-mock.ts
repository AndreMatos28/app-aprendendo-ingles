import { Frase } from "../shared/frase.model";

export const FRASES: Frase[] = [
  { fraseEN: "I like to learn!", frasePT: "Eu gosto de aprender!" },
  { fraseEN: "I watch TV!", frasePT: "Eu assisto TV!" },
  { fraseEN: "How are you?", frasePT: "Como você está?" },
  { fraseEN: "I eat bread!", frasePT: "Eu como pão!" },
  { fraseEN: "What's your name?", frasePT: "Qual é o seu nome?" },
  { fraseEN: "I love reading!", frasePT: "Eu amo ler!" },
  { fraseEN: "Where are you from?", frasePT: "De onde você é?" },
  { fraseEN: "I have a dog!", frasePT: "Eu tenho um cachorro!" },
  { fraseEN: "How old are you?", frasePT: "Quantos anos você tem?" },
  { fraseEN: "I'm going to the beach!", frasePT: "Eu vou à praia!" },
  { fraseEN: "Do you like music?", frasePT: "Você gosta de música?" },
  { fraseEN: "I'm studying English!", frasePT: "Eu estou estudando inglês!" },
  { fraseEN: "What's your favorite food?", frasePT: "Qual é sua comida favorita?" },
  { fraseEN: "I have a sister!", frasePT: "Eu tenho uma irmã!" },
  { fraseEN: "I'm happy today!", frasePT: "Eu estou feliz hoje!" },
  { fraseEN: "Do you like sports?", frasePT: "Você gosta de esportes?" },
  { fraseEN: "I'm going to the movies!", frasePT: "Eu vou ao cinema!" },
  { fraseEN: "What time is it?", frasePT: "Que horas são?" },
  { fraseEN: "I love dancing!", frasePT: "Eu amo dançar!" },
  { fraseEN: "I have a bike!", frasePT: "Eu tenho uma bicicleta!" }
];




/* {
  "basico": [
    {
      "fraseEN": "I like to learn!",
      "frasePT": "Eu gosto de aprender!",
      "type": "translate"
    },
    {
      "fraseEN": "I watch TV!",
      "frasePT": "Eu assisto TV!",
      "type": "translate"
    },
    {
      "fraseEN": "How are you?",
      "frasePT": "Como você está?",
      "type": "translate"
    },
    {
      "fraseEN": "I eat bread!",
      "frasePT": "Eu como pão!",
      "type": "translate"
    },
    {
      "fraseEN": "What's your name?",
      "frasePT": "Qual é o seu nome?",
      "type": "translate"
    },
    {
      "fraseEN": "I love reading!",
      "frasePT": "Eu amo ler!",
      "type": "translate"
    },
    {
      "fraseEN": "Where are you from?",
      "frasePT": "De onde você é?",
      "type": "translate"
    },
    {
      "fraseEN": "I have a dog!",
      "frasePT": "Eu tenho um cachorro!",
      "type": "translate"
    },
    {
      "fraseEN": "How old are you?",
      "frasePT": "Quantos anos você tem?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm going to the beach!",
      "frasePT": "Eu vou à praia!",
      "type": "translate"
    },
    {
      "fraseEN": "Do you like music?",
      "frasePT": "Você gosta de música?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm studying English!",
      "frasePT": "Eu estou estudando inglês!",
      "type": "translate"
    },
    {
      "fraseEN": "What's your favorite food?",
      "frasePT": "Qual é sua comida favorita?",
      "type": "translate"
    },
    {
      "fraseEN": "I have a sister!",
      "frasePT": "Eu tenho uma irmã!",
      "type": "translate"
    },
    {
      "fraseEN": "I'm happy today!",
      "frasePT": "Eu estou feliz hoje!",
      "type": "translate"
    },
    {
      "fraseEN": "Do you like sports?",
      "frasePT": "Você gosta de esportes?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm going to the movies!",
      "frasePT": "Eu vou ao cinema!",
      "type": "translate"
    },
    {
      "fraseEN": "What time is it?",
      "frasePT": "Que horas são?",
      "type": "translate"
    },
    {
      "fraseEN": "I love dancing!",
      "frasePT": "Eu amo dançar!",
      "type": "translate"
    },
    {
      "fraseEN": "I have a bike!",
      "frasePT": "Eu tenho uma bicicleta!",
      "type": "translate"
    }
  ],
  "intermediario": [
    {
      "fraseEN": "I'm going to the store. Do you want something?",
      "frasePT": "Vou ao mercado. Você quer alguma coisa?",
      "type": "translate"
    },
    {
      "fraseEN": "Can you recommend a good restaurant?",
      "frasePT": "Você pode recomendar um bom restaurante?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm looking for a job. Do you know of any openings?",
      "frasePT": "Estou procurando emprego. Você sabe de alguma vaga?",
      "type": "translate"
    },
    {
      "fraseEN": "How do I get to the airport?",
      "frasePT": "Como eu chego ao aeroporto?",
      "type": "translate"
    },
    {
      "fraseEN": "I need to call a taxi. Can you help me?",
      "frasePT": "Preciso chamar um táxi. Você pode me ajudar?",
      "type": "translate"
    },
    {
      "fraseEN": "What's the weather like today?",
      "frasePT": "Qual é o tempo hoje?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm feeling tired. I think I'll rest.",
      "frasePT": "Estou me sentindo cansado. Acho que vou descansar.",
      "type": "translate"
    },
    {
      "fraseEN": "Do you have any suggestions for this weekend?",
      "frasePT": "Você tem alguma sugestão para este fim de semana?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm trying to learn Portuguese. Can you teach me?",
      "frasePT": "Estou tentando aprender português. Você pode me ensinar?",
      "type": "translate"
    },
    {
      "fraseEN": "Can I borrow your phone charger?",
      "frasePT": "Posso emprestar seu carregador de celular?",
      "type": "translate"
    },
    {
      "fraseEN": "I need to find a hotel. Do you know any good ones?",
      "frasePT": "Preciso encontrar um hotel. Você conhece algum bom?",
      "type": "translate"
    },
    {
      "fraseEN": "How much does this cost?",
      "frasePT": "Quanto custa isso?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm looking for a map. Can you help me?",
      "frasePT": "Estou procurando um mapa. Você pode me ajudar?",
      "type": "translate"
    },
    {
      "fraseEN": "What time does the store close?",
      "frasePT": "Que horas o mercado fecha?",
      "type": "translate"
    },
    {
      "fraseEN": "I'd like to make a reservation.",
      "frasePT": "Gostaria de fazer uma reserva.",
      "type": "translate"
    },
    {
      "fraseEN": "Can you speak slower, please?",
      "frasePT": "Você pode falar mais devagar, por favor?",
      "type": "translate"
    },
    {
      "fraseEN": "I'm trying to find my way around the city.",
      "frasePT": "Estou tentando me localizar na cidade.",
      "type": "translate"
    },
    {
      "fraseEN": "Do you have Wi-Fi?",
      "frasePT": "Você tem Wi-Fi?",
      "type": "translate"
    },
    {
      "fraseEN": "Can I get a receipt, please?",
      "frasePT": "Posso ter um recibo, por favor?",
      "type": "translate"
    }
  ]
} */
