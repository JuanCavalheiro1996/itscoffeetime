const answers = [
    "Sim, está na hora do café! ☕️ Vá pegar uma xícara!",
    "Ainda não... mas talvez em 5 minutos? ⏳",
    "Só se for um espresso! 🚀",
    "Não, mas tome um copo d'água antes! 💧",
    "Com certeza! E que seja um café duplo! ✌️",
    "Não, é hora do chá! 🫖 Brincadeira, é sempre hora do café!"
];

const funFacts = [
    "O café foi descoberto por cabras na Etiópia!",
    "O mundo consome mais de 2 bilhões de xícaras de café por dia.",
    "Os grãos de café são, na verdade, sementes de uma fruta chamada cereja do café.",
    "O café mais caro do mundo é feito a partir de fezes de elefante!",
    "A Finlândia é o país que mais consome café por pessoa."
];

const answerElement = document.getElementById('answer');
const funFactElement = document.getElementById('fun-fact');
const timerButton = document.getElementById('timer-button');

// Mostra uma resposta aleatória
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
}

// Mostra uma curiosidade aleatória
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = `Sabia? ${funFacts[randomIndex]}`;
}

// Timer de 4 minutos
timerButton.addEventListener('click', () => {
    alert("Timer iniciado! Seu café estará pronto em 4 minutos. ⏳");
    setTimeout(() => {
        alert("Hora do café! Aproveite a sua bebida. ☕️");
    }, 240000); // 4 minutos em milissegundos
});

// Inicializa o site
getRandomAnswer();
getRandomFunFact();