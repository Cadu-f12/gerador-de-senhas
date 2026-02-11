function renderPassword(lengthPassword) {
    const paragraphElem = document.querySelector('p');
    const password = loadPassword(lengthPassword);

    paragraphElem.innerHTML = password;
}
function loadPassword(lengthPassword) {
    if (lengthPassword < 0 || lengthPassword > 16 ) {
        return 'Number error'
    }
    
    const randomNum = Math.random();
    const numString = String(randomNum);

    // Up to 16 digits

    let password = '';
    for (i = 2; i <= (lengthPassword + 1); i++) {
        password += numString[i];
    }

    return password;
}