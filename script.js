function generatePasswords() {
    const length = document.getElementById("length").value;
    const includeLetters = document.getElementById("includeLetters").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeAll = document.getElementById("includeAll").checked;

    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.innerHTML = "";

    let generatedPasswords = "";

    if (includeAll) {
        const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        generatedPasswords += "<p><strong>Senha com Letras:</strong> " + generateRandomPassword(length, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") + "</p>";
        generatedPasswords += "<p><strong>Senha com Números:</strong> " + generateRandomPassword(length, "0123456789") + "</p>";
        generatedPasswords += "<p><strong>Senha com Símbolos:</strong> " + generateRandomPassword(length, "!@#$%^&*()_+") + "</p>";
        generatedPasswords += "<p><strong>Senha com Todas:</strong> " + generateRandomPassword(length, allCharacters) + "</p>";
    } else {
        if (includeLetters) {
            generatedPasswords += "<p><strong>Senha com Letras:</strong> " + generateRandomPassword(length, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") + "</p>";
        }

        if (includeNumbers) {
            generatedPasswords += "<p><strong>Senha com Números:</strong> " + generateRandomPassword(length, "0123456789") + "</p>";
        }

        if (includeSymbols) {
            generatedPasswords += "<p><strong>Senha com Símbolos:</strong> " + generateRandomPassword(length, "!@#$%^&*()_+") + "</p>";
        }
    }

    passwordOutput.innerHTML = generatedPasswords;
}

function generateRandomPassword(length, charset) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

generatePasswords(); // Chamada inicial para gerar as senhas quando a página é carregada
