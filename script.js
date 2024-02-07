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
        metin2: [
            "Dragão", "Guerreiro", "Samurai", "Ninja", "Monge", "Mago", "Arqueiro", "Sacerdote", "Lutador", "Necromante",
            "Espadachim", "Bárbaro", "Mercenário", "Assassino", "Xamã", "Mestre", "Lendário", "Feiticeiro", "Eremita", "Guerreiro da Noite",
            "Trovador", "Cavaleiro", "Paladino", "Protetor", "Falcão", "Bruxo", "Feiticeira", "Xerife", "Destruidor", "Arcanista",
            "Patrulheiro", "Cavaleiro Negro", "Alquimista", "Sábio", "Sombra", "Ranger", "Desbravador", "Legionário", "Espectro", "Lobo Solitário",
            "Guardião", "Samurai do Vento", "Arconte", "Clérigo", "Exterminador", "Oráculo", "Dragoon", "Vigilante", "Corcel Negro",
            "Salteador", "Custódio", "Duelista", "Fantasma", "Errante", "Templário", "Sacerdotisa", "Conquistador", "Encantador",
            "Colecionador", "Anjo", "Açougueiro", "Pioneiro", "Vândalo", "Exorcista", "Mascate", "Nômade", "Infernal",
            "Guarda Real", "Cavaleiro da Lua", "Fênix", "Ogro", "Sentinela", "Arpoador", "Vaqueiro", "Lenhador", "Exilado",
            "Mercador", "Desafiante", "Caçador de Recompensas", "Sábio dos Cinco Elementos", "Cavaleiro da Esperança", "Combatente", "Astro", "Ilusionista", "Céu",
            "Falcão Noturno", "Retalhador", "Punhado", "Golem", "Serpente", "Protetor das Almas", "Artífice", "Destruidor de Mundos", "Abutre", "Pérola Negra",
            "Filho do Sol", "Colecionador de Troféus", "Exterminador de Demônios", "Gladiador", "Cristalino", "Guerreiro da Tempestade", "Destemido", "Implacável", "Andarilho",
            "Cavaleiro dos Céus", "Guardião do Inferno", "Mestre das Sombras", "Guerreiro da Luz", "Nômade das Estrelas", "Senhor dos Ventos", "Marujo", "Viajante do Tempo", "Encantador de Almas", "Sombra da Lua",
            "Vingador", "Destruidor do Caos", "Guerreiro Sagrado", "Cavaleiro da Rosa", "Andarilho das Profundezas"
        ],
        trollar: [
            "Zueiro", "Trollador", "Gargalhada", "Brincalhão", "Risada", "Zombar", "Sorriso", "Festeiro", "Pilhéria", "Pitoresco",
            "Piadista", "Cômico", "Maluco", "Divertido", "Engraçado", "Enganador", "Irreverente", "Doido", "Gozador", "Palhaço",
            "Pândego", "Fanfarrão", "Leviano", "Farsante", "Trapaceiro", "Pilantra", "Patife", "Farsola", "Estapafúrdio", "Insolente",
            "Desbocado", "Desbundado", "Gracinha", "Caipira", "Despachado", "Dado", "Agitado", "Peste", "Desaforado", "Irreverente",
            "Ousado", "Atrevido", "Folclórico", "Brejeiro", "Biruta", "Farrista", "Alegre", "Cachaceiro", "Bêbado", "Farrapaz",
            "Baladeiro", "Farra", "Bagunça", "Pândega", "Arruaça", "Baderna", "Confusão", "Bagunça", "Babado", "Fuzuê",
            "Furdunço", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço",
            "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço", "Fuzuê", "Pegação", "Folga", "Folia", "Furdunço"
        ],
        criminosos: [
            "Gângster", "Bandido", "Ladrão", "Assassino", "Fugitivo", "Contrabandista", "Traficante", "Fora da Lei", "Mercenário", "Criminoso",
            "Forasteiro", "Gatuno", "Marginal", "Canastrão", "Vigarista", "Dúbio", "Manhoso", "Pulha", "Trapaceiro", "Trambiqueiro",
            "Matador", "Fugitivo", "Perigoso", "Vilão", "Infrator", "Vândalo", "Covarde", "Desprezível", "Aventureiro", "Pirata",
            "Criminoso", "Foragido", "Delinquente", "Fujão", "Desonesto", "Fugaz", "Infrator", "Dissimulado", "Rústico", "Furtivo",
            "Vagabundo", "Gatuno", "Rogue", "Safado", "Arruaceiro", "Invasor", "Atrevido", "Larápio", "Destruidor", "Atentado",
            "Abutre", "Pistoleiro", "Mafioso", "Arrombador", "Arruaceiro", "Bandoleiro", "Baderneiro", "Contraventor", "Estrangeiro", "Desordeiro",
            "Pistolero", "Punguista", "Sabotador", "Saqueador", "Traidor", "Culpado", "Caloteiro", "Debochado", "Devasso", "Evasivo",
            "Esbórnia", "Furioso", "Grosseiro", "Intruso", "Libertino", "Malandro", "Maldoso", "Pândego", "Patife", "Tétrico",
            "Truão", "Vulgar", "Açoitador", "Ameaçador", "Aniquilador", "Apavorante", "Arrebentador", "Atroz", "Bárbaro", "Brutal",
            "Carrasco", "Chacal", "Demolidor", "Devastador", "Feroz", "Impiedoso", "Maléfico", "Monstruoso", "Sádico", "Sanguinário",
            "Terrorista", "Tirano", "Violento", "Aberrante", "Assustador", "Bestial", "Chocante", "Cruel", "Desumano", "Diabólico",
            "Horripilante", "Imundo", "Infernal", "Insano", "Macabro", "Perturbador", "Repugnante", "Sórdido", "Sombrio", "Terrível",
            "Torpe", "Uivante", "Vicioso", "Vil", "Sobrevivente", "Carrasco", "Cavaleiro da Noite", "Espírito da Escuridão", "Fera", "Lobo"
        ],
        outros: [
            "Mistério", "Aventureiro", "Herói", "Viajante", "Desconhecido", "Mágico", "Lendário", "Fantasma", "Sombra", "Misterioso",
            "Abyssal", "Anônimo", "Aurora", "Barbáro", "Bravo", "Capitão", "Caçador", "Caos", "Celestial", "Cigano",
            "Cinzento", "Cruel", "Crepúsculo", "Diamante", "Ditador", "Doutor", "Draconiano", "Dragão", "Espectro", "Eterno",
            "Exilado", "Explorador", "Fada", "Faminto", "Fantástico", "Félix", "Fenômeno", "Fênix", "Feral", "Ferro",
            "Fidalgo", "Floresta", "Fogo", "Frio", "Galáctico", "Gigante", "Gnomo", "Golem", "Guerreiro", "Hiena",
            "Horizonte", "Imortal", "Impiedoso", "Indomável", "Infame", "Infernus", "Insólito", "Invencível", "Javali", "Justiça",
            "Kitsune", "Labirinto", "Leão", "Lenda", "Lobisomem", "Luminoso", "Luz", "Machado", "Majestoso", "Malandro",
            "Maníaco", "Manto", "Máscara", "Matador", "Mestre", "Metamorfo", "Misterioso", "Morcego", "Mutante", "Névoa",
            "Nobre", "Noturno", "Oceano", "Oculto", "Ouro", "Peregrino", "Pirata", "Poção", "Predador", "Príncipe",
            "Princesa", "Puro", "Raio", "Rainha", "Rei", "Ressurreição", "Rico", "Rogue", "Rubro", "Sábio",
            "Sabre", "Sagrado", "Salamandra", "Sangue", "Sátiro", "Selvagem", "Serpente", "Sombras", "Spectro", "Sussurro",
            "Talismã", "Tempestade", "Tigre", "Tormenta", "Trovão", "Tumulto", "Túmulo", "Ursinho", "Utopia", "Valente",
            "Vampiro", "Vazio", "Vento", "Vida", "Viúvo", "Zombaria", "Zumbi"
        ]
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
