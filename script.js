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
            "Drago", "Sombra", "Chama", "Furia", "Ventos",
            "Trovão", "Espada", "Khan", "Monge", "Samurai",
            "Ninja", "Shogun", "Imperador", "Lutador", "Conquistador",
            "Clérigo", "Guerreiro", "Feiticeiro", "Assassino", "Arqueiro",
            "Mago", "Caçador", "Lâmina", "Lobo", "Dragão",
            "Fênix", "Leão", "Tigre", "Águia", "Lince",
            "Ogre", "Grifo", "Cavaleiro", "Imortal", "Espectro",
            "Arcanjo", "Valkyria", "Harpias", "Lâmia", "Quimera",
            "Minotauro", "Cerbero", "Górgona", "Kraken", "Basilisco",
            "Hidra", "Cíclope", "Guerreiro Celestial", "Samurai Negro", "Dragão da Noite",
            "Mago Elemental", "Caçador das Trevas", "Ninja das Sombras", "Arqueiro Sagrado", "Lutador do Crepúsculo",
            "Espada Divina", "Clérigo Místico", "Feiticeiro Sombrio", "Assassino da Lua", "Lâmina Flamejante",
            "Cavaleiro de Dragão", "Guerreiro do Trovão", "Arqueiro da Tempestade", "Mago das Estrelas", "Ninja da Lua",
            "Guardião da Luz", "Exterminador das Sombras", "Samurai de Fogo", "Dragão Alado", "Monge da Serenidade",
            "Feiticeira das Trevas", "Lutador da Aurora", "Clériga do Sol", "Arqueira da Floresta", "Maga do Gelo",
            "Caçador de Demônios", "Espadachim do Vento", "Ninja da Neblina", "Arqueiro Celestial", "Guerreira da Lua",
            "Cavaleiro Negro", "Assassino Noturno", "Mago das Profundezas", "Lutadora do Deserto", "Clériga da Aurora",
            "Guerreiro Elemental", "Mago da Tempestade", "Ninja do Trovão", "Arqueira da Lua", "Assassino das Sombras",
            "Espadachim do Crepúsculo", "Caçadora de Almas", "Clériga do Crepúsculo", "Monge das Estrelas", "Arqueira da Aurora",
            "Guerreiro Sagrado", "Mago da Noite", "Lutadora da Tempestade", "Espadachim da Lua", "Assassina das Trevas",
            "Ninja do Crepúsculo", "Caçadora do Vento", "Clériga do Trovão", "Monge da Terra", "Arqueira do Fogo",
            "Guerreiro da Escuridão", "Mago da Serenidade", "Lutadora do Crepúsculo", "Espadachim Celestial", "Ninja do Vento",
            "Caçador da Lua", "Clériga das Estrelas", "Monge da Aurora", "Arqueira da Neblina", "Guerreiro do Sol"
        ],        
        discord: [
            "CrispyChicken", "PixelPirate", "EchoEagle", "CrimsonCobra", "ShadowSpecter",
            "NeonNinja", "SteelStorm", "FrostyFalcon", "CyberSphinx", "ThunderTiger",
            "SavageSorcerer", "RapidRaven", "PixelPenguin", "CrimsonCoyote", "ShadowSamurai",
            "NeonNemesis", "SteelShark", "FrostFox", "CyberCentaur", "ThunderTurtle",
            "SavageScorpion", "RapidRaccoon", "DigitalDragon", "ElectricElephant", "EchoEmperor",
            "GoldenGryphon", "JadeJaguar", "RubyRabbit", "SapphireSerpent", "EmeraldEagle",
            "SilverPhoenix", "ObsidianOwl", "PlatinumPuma", "BronzeBear", "DiamondDolphin",
            "ShadowStag", "NeonNightmare", "SteelSalamander", "FrostyFerret", "CyberCheetah",
            "ThunderToucan", "SavageSpider", "RapidRat", "PixelPanther", "CrimsonCrow",
            "NeonNymph", "SteelStork", "FrostFalcon", "CyberCoyote", "ThunderTigress",
            "SavageShark", "RapidRabbit", "PixelPeacock", "CrimsonCrab", "ShadowShrimp",
            "NeonNarwhal", "SteelSnail", "FrostyFrog", "CyberCondor", "ThunderTrogon",
            "SavageSalamander", "RapidRaven", "PixelPenguin", "CrimsonCoyote", "ShadowSamurai",
            "NeonNemesis", "SteelShark", "FrostFox", "CyberCentaur", "ThunderTurtle",
            "SavageScorpion", "RapidRaccoon", "DigitalDragon", "ElectricElephant", "EchoEmperor",
            "GoldenGryphon", "JadeJaguar", "RubyRabbit", "SapphireSerpent", "EmeraldEagle",
            "SilverPhoenix", "ObsidianOwl", "PlatinumPuma", "BronzeBear", "DiamondDolphin",
            "ShadowStag", "NeonNightmare", "SteelSalamander", "FrostyFerret", "CyberCheetah",
            "ThunderToucan", "SavageSpider", "RapidRat", "PixelPanther", "CrimsonCrow",
            "NeonNymph", "SteelStork", "FrostFalcon", "CyberCoyote", "ThunderTigress",
            "SavageShark", "RapidRabbit", "PixelPeacock", "CrimsonCrab", "ShadowShrimp",
            "NeonNarwhal", "SteelSnail", "FrostyFrog", "CyberCondor", "ThunderTrogon",
            "SavageSalamander", "RapidRaven", "PixelPenguin", "CrimsonCoyote", "ShadowSamurai",
            "NeonNemesis", "SteelShark", "FrostFox", "CyberCentaur", "ThunderTurtle",
            "SavageScorpion", "RapidRaccoon", "DigitalDragon", "ElectricElephant", "EchoEmperor",
            "GoldenGryphon", "JadeJaguar", "RubyRabbit", "SapphireSerpent", "EmeraldEagle",
            "SilverPhoenix", "ObsidianOwl", "PlatinumPuma", "BronzeBear", "DiamondDolphin",
            "ShadowStag", "NeonNightmare", "SteelSalamander", "FrostyFerret", "CyberCheetah",
            "ThunderToucan", "SavageSpider", "RapidRat", "PixelPanther", "CrimsonCrow",
            "NeonNymph", "SteelStork", "FrostFalcon", "CyberCoyote", "ThunderTigress",
            "SavageShark", "RapidRabbit", "PixelPeacock", "CrimsonCrab", "ShadowShrimp",
            "NeonNarwhal", "SteelSnail", "FrostyFrog", "CyberCondor", "ThunderTrogon",
            "SavageSalamander"
        ],        
        criminosos: [
            "Scarface", "Vingador", "Assassino", "Caveira", "Máscara Negra",
            "Sombra", "Faca", "Caçador", "Cérebro", "Carrasco",
            "Cicatriz", "Espectro", "Tubarão", "Veneno", "Fantasma",
            "Cobra", "Mercenário", "Psicopata", "Tempestade", "Raptor",
            "Lâmina", "Capuz", "Sanguinário", "Vingança", "Máquina de Guerra",
            "Anjo Caído", "Demônio", "Espião", "Caos", "Predador",
            "Víbora", "Destruidor", "Fênix", "Escuridão", "Lobo Solitário",
            "Carniceiro", "Hiena", "Fugitivo", "Crimson", "Tigre Dourado",
            "Ladrão de Almas", "O Exilado", "Cabeça de Martelo", "Rufião", "Lâmina Afiada",
            "Vírus", "Senhor do Crime", "Bandido", "Rei do Submundo", "Tigre das Sombras",
            "O Corvo", "Rainha do Caos", "Coração Negro", "Mestre da Escuridão", "Ninja Negro",
            "Guerreiro do Abismo", "O Indomável", "Silenciador", "Fúria Negra", "O Mercado Negro",
            "Espião Sombrio", "O Inquisidor", "O Carrasco", "O Ceifador", "O Demolidor",
            "A Mão Negra", "O Sinistro", "O Destruidor de Almas", "O Executor", "O Carrasco de Almas",
            "Mestre do Terror", "Cavaleiro das Trevas", "O Predador da Noite", "O Ceifador de Almas", "O Açougueiro",
            "O Senhor da Guerra", "O Lobo Solitário", "O Devorador de Almas", "O Drácula", "O Aniquilador",
            "O Mestre das Sombras", "O Senhor do Abismo", "O Serpente Negra", "O Assassino das Trevas", "O Dragão Negro",
            "A Serpente de Prata", "A Lâmina da Noite", "A Raposa do Crime", "O Mestre Assassino", "O Gavião Sombrio",
            "O Lorde das Trevas", "A Dama do Terror", "A Sombra do Caos", "O Monstro de Ébano", "O Cavaleiro Negro",
            "O Corvo Sangrento", "O Pecador", "A Estrela Negra", "A Serpente do Abismo", "O Punho de Ferro",
            "A Fera Negra", "O Terror do Submundo", "O Malfeitor", "A Fera Voraz", "O Mestre da Escuridão",
            "O Senhor da Noite", "O Carniceiro Noturno", "O Flagelo", "O Verme Noturno", "O Caçador das Trevas",
            "O Azarado", "A Peste Negra", "A Lâmina Negra", "O Cavaleiro da Noite", "A Serpente Cruel",
            "O Exterminador", "O Batedor", "O Estripador", "O Verdugo", "A Fera do Inferno",
            "A Dama da Noite", "O Açougueiro", "A Fera do Abismo", "A Mão do Destino", "O Mestre da Foice",
            "O Arauto da Morte", "O Senhor da Morte", "O Colosso Sombrio", "O Carrasco Noturno", "A Morte Negra",
            "A Lâmina do Caos", "O Arquidemônio", "O Abutre Noturno", "O Lobo Assassino", "O Exterminador de Almas",
            "O Carrasco das Sombras", "O Anjo da Morte", "A Fera da Escuridão", "A Fúria da Noite", "O Verdugo da Escuridão",
            "O Mestre das Marés Negras", "A Fera Sanguinária", "A Dama das Trevas", "O Sombrio Noturno", "O Demônio da Noite",
            "O Ceifador Sombrio", "O Anjo Negro", "O Escaravelho Negro", "A Serpente do Inferno", "O Verme das Trevas",
            "O Exterminador da Noite", "A Mão da Ruína", "A Fera da Perdição", "A Serpente Alada", "A Mão Negra",
            "O Devorador de Mentes", "O Diabo da Noite", "A Besta Alada", "O Anjo Negro", "A Fúria Negra",
            "A Sombra do Mal", "A Serpente Noturna", "O Demônio da Escuridão", "O Terror do Ocaso", "O Mestre da Carnificina"
        ],
        
        outros: [
            // Hackers
            "CyberGhost", "ByteBandit", "DataNinja", "HackMaster", "CodeCrusher",
            "PixelPirate", "BinaryBrawler", "StealthStriker", "ViralVigilante", "DigitalDynamo",
            "PhantomPhreak", "ZeroDayWarrior", "NetworkNemesis", "TechTerror", "FirewallFury",
            "CrashOverride", "MatrixMarauder", "CircuitCobra", "PixelProwler", "ByteBuster",
        
            // Presidentes
            "LibertyLincoln", "WashingtonWarrior", "JeffersonJuggernaut", "FranklinFreedom", "RooseveltRanger",
            "KennedyKnight", "LincolnLegend", "AdamsAvenger", "JacksonJourneyman", "ObamaOracle",
            "ClintonCrusader", "ReaganRuler", "EisenhowerEmpire", "TrumanTitan", "MadisonMajesty",
            "CoolidgeCommander", "CarterConqueror", "HooverHero", "GrantGuardian", "WilsonWarlock",
        
            // Gangsteres
            "Scarface", "Capone", "Gambino", "Dillinger", "BonnieClyde",
            "Lansky", "Bugsy", "Luciano", "Gotti", "Lucky",
            "Meyer", "Nucky", "Bumpy", "Chapo", "Pablo",
        
            // Ninjas
            "ShadowShinobi", "SilentStriker", "StealthySlicer", "NinjaNebula", "BladeBlossom",
            "SwiftShadow", "SneakySerpent", "DarkDragon", "MysticMask", "SteelySilhouette",
            "PhantomFang", "CunningChameleon", "SwiftSparrow", "SilentStorm", "NimbleNinja",
        
            // Piratas
            "Blackbeard", "CaptainHook", "Redbeard", "LongJohnSilver", "CalicoJack",
            "AnneBonny", "MaryRead", "DavyJones", "CaptainKidd", "Bluebeard",
            "BartholomewRoberts", "BlackBart", "EdwardTeach", "WilliamKidd", "HenryMorgan",
        
            // Espiões
            "BondJamesBond", "BourneJasonBourne", "007Agent", "SpyMaster", "SecretSpecter",
            "StealthSentry", "CipherSleuth", "CovertCommando", "UndercoverViper", "ShadowSpy",
            "InvisibleIntruder", "DoubleAgent", "StealthySaboteur", "ClandestineCobra", "SecretiveSleuth",
        
            // Super-heróis
            "SuperSonic", "CaptainCourage", "MightyMorpher", "IncredibleInvincible", "DynamicDynamo",
            "PowerPatriot", "GuardianGalaxy", "VigilantVindicator", "HeroicHavoc", "MegaMarvel",
            "EpicAvenger", "SupremeSentinel", "TitanicThunder", "RadiantRanger", "AwesomeAdventurer"
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
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
    } else if (selectedBackground === "black") {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
    }
}

generatePasswords(); // Chamada inicial para gerar as senhas quando a página é carregada

