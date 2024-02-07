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

function generateNickname() {
    const nicknameTypes = {
        metin2: ["Dragão", "Guerreiro", "Samurai", "Ninja", "Monge", "Mago", "Arqueiro", "Sacerdote", "Lutador", "Necromante"],
        trollar: ["Zueiro", "Trollador", "Gargalhada", "Brincalhão", "Risada", "Zombar", "Sorriso", "Festeiro", "Pilhéria", "Pitoresco"],
        criminosos: ["Gângster", "Bandido", "Ladrão", "Assassino", "Fugitivo", "Contrabandista", "Traficante", "Fora da Lei", "Mercenário", "Criminoso"],
        outros: ["Mistério", "Aventureiro", "Herói", "Viajante", "Desconhecido", "Mágico", "Lendário", "Fantasma", "Sombra", "Misterioso"]
    };

    const selectedTypes = [];
    const checkboxes = document.getElementsByName("nicknameType");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedTypes.push(checkbox.value);
        }
    });

    if (selectedTypes.length === 0) {
        alert("Por favor, selecione pelo menos um tipo de nickname.");
        return;
    }

    let generatedNicknames = "";

    selectedTypes.forEach(function(type) {
        const nickname = generateRandomNickname(nicknameTypes[type]);
        generatedNicknames += "<div class='nickname-box'><strong>" + type.charAt(0).toUpperCase() + type.slice(1) + ":</strong> " + nickname + "</div>";
    });

    const nicknameOutput = document.getElementById("nicknameOutput");
    nicknameOutput.innerHTML = generatedNicknames;
}

function generateRandomNickname(nicknames) {
    const randomIndex = Math.floor(Math.random() * nicknames.length);
    return nicknames[randomIndex];
}

function toggleBackground() {
    const body = document.querySelector("body");
    const backgroundToggle = document.getElementById("backgroundToggle");
    const selectedBackground = backgroundToggle.value;

    if (selectedBackground === "white") {
        body.style.backgroundColor = "#ffffff";
    } else if (selectedBackground === "black") {
        body.style.backgroundColor = "#000000";
    }
}

generatePasswords(); // Chamada inicial para gerar as senhas quando a página é carregada
