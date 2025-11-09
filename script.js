let timer;
let timeLeft;
let isRunning = false;

function startTimer() {
    if (isRunning) return;
    
    const minutes = parseInt(document.getElementById('minutes').value);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Введите корректное количество минут!');
        return;
    }
    
	
    timeLeft = minutes * 60;
    isRunning = true;
    updateDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            document.getElementById('alarm').play();
            alert('Время вышло!');
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('display').textContent = '--:--';
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}