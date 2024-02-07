// Função para gerar senhas
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

// Função para gerar um nickname aleatório
function generateNickname() {
    const nicknameTypes = {
        metin2: ["Dragão", "Guerreiro", "Samurai", "Ninja", "Monge", "Mago", "Arqueiro", "Sacerdote", "Lutador", "Necromante"],
        trollar: ["Zueiro", "Trollador", "Gargalhada", "Brincalhão", "Risada", "Zombar", "Sorriso", "Festeiro", "Pilhéria", "Pitoresco"],
        criminosos: ["Gângster", "Bandido", "Ladrão", "Assassino", "Fugitivo", "Contrabandista", "Traficante", "Fora da Lei", "Mercenário", "Criminoso"],
        outros: ["Mistério", "Aventureiro", "Herói", "Viajante", "Desconhecido", "Mágico", "Lendário", "Fantasma", "Sombra", "Misterioso"]
    };

    const selectedTypes = Array.from(document.querySelectorAll('input[name="nicknameType"]:checked')).map(checkbox => checkbox.value);

    if (selectedTypes.length === 0) {
        alert("Por favor, selecione pelo menos um tipo de nickname.");
        return;
    }

    const selectedType = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
    const nicknames = nicknameTypes[selectedType];
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

    const nicknameOutput = document.getElementById("nicknameOutput");
    nicknameOutput.innerHTML = "<p>Seu novo nickname é: <strong>" + randomNickname + "</strong></p>";
}

// Função para gerar uma senha aleatória com o comprimento especificado e caracteres fornecidos
function generateRandomPassword(length, charset) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Função para alternar entre os fundos preto e branco
function toggleBackground() {
    const body = document.querySelector("body");
    const backgroundToggle = document.getElementById("backgroundToggle");
    const selectedBackground = backgroundToggle.value;

    body.style.backgroundColor = selectedBackground;
}

generatePasswords(); // Chamada inicial para gerar as senhas quando a página é carregada
