let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    attempts++;

    let message = '';

    if (guess === randomNumber) {
        message = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'block';
    } else if (guess < randomNumber) {
        message = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        message = 'Too high! Try again.';
    }

    document.getElementById('message').textContent = message;
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    this.style.display = 'none';
});
