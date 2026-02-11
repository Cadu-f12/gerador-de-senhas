function renderPassword() {
    const paragraphElem = document.querySelector('p');
    const password = loadPassword();

    paragraphElem.innerHTML = password;
}
function loadPassword() {
    const randomNum = Math.random();
    const numString = String(randomNum);

    // Up to 16 digits

    let password = '';
    for (i = 2; i < 10; i++) {
        password += numString[i];
    }

    return password;
}