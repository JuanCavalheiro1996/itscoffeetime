const answers = [
    "Sim, está na hora do café! ☕️ Vá pegar uma xícara!",
    "Com certeza! O café está te esperando! 🚀",
    "A vida fica melhor com café! Hora de tomar um! ✨",
    "Café é sempre a resposta! Vá já! 🤓",
    "Não pense duas vezes: é hora do café! ⏰",
    "O café está chamando seu nome! Não o deixe esperando! ☕️",
    "Café é energia, foco e felicidade! Tome já! 💪",
    "Você merece um café agora! Aproveite! 😊",
    "Café é o combustível dos sonhadores! Hora de recarregar! 🚀",
    "Não há momento ruim para um café! Vá lá! 🌟"
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
const cancelTimerButton = document.getElementById('cancel-timer');
const countdownElement = document.getElementById('countdown');
const refreshButton = document.getElementById('refresh-button');
const showHistoryButton = document.getElementById('show-history');
const historyContainer = document.getElementById('history-container');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

let interval; // Variável para armazenar o intervalo do timer

// Função para registrar uma pausa para o café
function registerCoffeeBreak() {
    const now = new Date();
    const timestamp = now.toLocaleString(); // Formata a data e hora
    const coffeeBreaks = JSON.parse(localStorage.getItem('coffeeBreaks')) || [];
    coffeeBreaks.push(timestamp);
    localStorage.setItem('coffeeBreaks', JSON.stringify(coffeeBreaks));
}

// Função para exibir o histórico de pausas
function showHistory() {
    const coffeeBreaks = JSON.parse(localStorage.getItem('coffeeBreaks')) || [];
    historyList.innerHTML = coffeeBreaks.map(breakTime => `<li>${breakTime}</li>`).join('');
    historyContainer.classList.remove('hidden');
}

// Função para limpar o histórico
function clearHistory() {
    localStorage.removeItem('coffeeBreaks');
    historyList.innerHTML = '';
    historyContainer.classList.add('hidden');
}

// Função para cancelar o timer
function cancelTimer() {
    clearInterval(interval); // Para o timer
    countdownElement.textContent = "Timer cancelado!";
    timerButton.textContent = "Iniciar timer de 4 minutos";
    timerButton.disabled = false;
    timerButton.classList.remove('timer-active');
    cancelTimerButton.classList.remove('visible'); // Oculta o botão de cancelar
    registerCoffeeBreak(); // Registra a pausa
}

// Timer de 4 minutos com contador regressivo
timerButton.addEventListener('click', () => {
    timerButton.textContent = "Timer em andamento...";
    timerButton.classList.add('timer-active');
    timerButton.disabled = true;
    cancelTimerButton.classList.add('visible'); // Exibe o botão de cancelar

    let timeLeft = 240; // 4 minutos em segundos
    countdownElement.textContent = `Tempo restante: 4:00`;

    interval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `Tempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Hora do café! ☕️";
            timerButton.textContent = "Iniciar timer de 4 minutos";
            timerButton.classList.remove('timer-active');
            timerButton.disabled = false;
            cancelTimerButton.classList.remove('visible'); // Oculta o botão de cancelar
            registerCoffeeBreak(); // Registra a pausa
        }
    }, 1000);
});

// Cancela o timer quando o botão de cancelar é clicado
cancelTimerButton.addEventListener('click', cancelTimer);

// Atualiza a resposta e a curiosidade
refreshButton.addEventListener('click', () => {
    getRandomAnswer();
    getRandomFunFact();
});

// Exibe o histórico de pausas
showHistoryButton.addEventListener('click', showHistory);

// Limpa o histórico de pausas
clearHistoryButton.addEventListener('click', clearHistory);

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

// Inicializa o site
getRandomAnswer();
getRandomFunFact();