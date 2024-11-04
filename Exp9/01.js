function generateNumber() {

    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    document.getElementById('text').value = randomNumber;
}
