const answers = [
    "Yes, it's coffee time! ☕️ Go grab a cup!",
    "Not yet... but maybe in 5 minutes? ⏳",
    "Only if it's espresso! 🚀",
    "No, but have some water first! 💧",
    "Definitely! But make it a double! ✌️",
    "Nope, it's tea time! 🫖 Just kidding, it's always coffee time!"
];

const funFacts = [
    "Coffee was discovered by goats in Ethiopia!",
    "The world consumes over 2 billion cups of coffee every day.",
    "Coffee beans are actually seeds from a fruit called a coffee cherry.",
    "The most expensive coffee in the world is made from elephant dung!",
    "Finland is the country that drinks the most coffee per capita."
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
    funFactElement.textContent = `Did you know? ${funFacts[randomIndex]}`;
}

// Timer de 4 minutos
timerButton.addEventListener('click', () => {
    alert("Timer started! Your coffee will be ready in 4 minutes. ⏳");
    setTimeout(() => {
        alert("Coffee time! Enjoy your brew. ☕️");
    }, 240000); // 4 minutos em milissegundos
});

// Inicializa o site
getRandomAnswer();
getRandomFunFact();