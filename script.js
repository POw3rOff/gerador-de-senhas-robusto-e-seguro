function generatePassword() {
    const length = document.getElementById("length").value;
    const passwordOutput = document.getElementById("passwordOutput");
    const password = generateRandomPassword(length);
    passwordOutput.innerHTML = "<strong>Senha Gerada:</strong> " + password;
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
