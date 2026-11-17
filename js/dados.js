let dados = {
    usuarios: [],

    jogos: [
        {
            id: 1,
            titulo: "The Witcher 3",
            capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwmhvqnldGAtu1-QCTng_rZBG1xlE_Acdi25IL8ED7g&s=10",
            lancamento: 2016,
            desenvolvedora: "CD Projekt Red",
            genero: "RPG",
            totalConquistas: 57,
            recomendado: true
        },
        {
            id: 2,
            titulo: "Stardew Valley",
            capa: "assets/jogos/stardew-valley.jpg",
            lancamento: 2016,
            desenvolvedora: "ConcernedApe",
            genero: "Simulação",
            totalConquistas: 40,
            recomendado: true
        },
        {
            id: 3,
            titulo: "Minecraft",
            capa: "assets/jogos/minecraft.jpg",
            lancamento: 2010,
            desenvolvedora: "Mojang Studios",
            genero: "Sandbox",
            totalConquistas: 122
        },

        // Adicione estes objetos dentro do array "jogos" em dados.js

        {
            id: 4,
            titulo: "Cyberpunk 2077",
            capa: "assets/jogos/cyberpunk-2077.jpg",
            desenvolvedora: "CD Projekt Red",
            genero: "RPG",
            totalConquistas: 57,
            lancamento: 2020,
            recomendado: true
        },
        {
            id: 5,
            titulo: "Kingdom Come: Deliverance",
            capa: "assets/jogos/kingdom-come-deliverance.jpg",
            desenvolvedora: "Warhorse Studios",
            genero: "RPG",
            totalConquistas: 82,
            lancamento: 2018,
            recomendado: true
        },
        {
            id: 6,
            titulo: "Kingdom Come: Deliverance II",
            capa: "assets/jogos/kingdom-come-deliverance-2.jpg",
            desenvolvedora: "Warhorse Studios",
            genero: "RPG",
            totalConquistas: 49,
            lancamento: 2025,
            recomendado: true
        },
        {
            id: 7,
            titulo: "Baldur's Gate 3",
            capa: "assets/jogos/baldurs-gate-3.jpg",
            desenvolvedora: "Larian Studios",
            genero: "RPG",
            totalConquistas: 54,
            lancamento: 2023,
            recomendado: true
        },
        {
            id: 8,
            titulo: "Divinity: Original Sin 2",
            capa: "assets/jogos/divinity-original-sin-2.jpg",
            desenvolvedora: "Larian Studios",
            genero: "RPG",
            totalConquistas: 97,
            lancamento: 2017,
            recomendado: true
        },
        {
            id: 9,
            titulo: "Divinity: Original Sin",
            capa: "assets/jogos/divinity-original-sin.jpg",
            desenvolvedora: "Larian Studios",
            genero: "RPG",
            totalConquistas: 54,
            lancamento: 2014,
            recomendado: false
        },
        {
            id: 10,
            titulo: "The Elder Scrolls V: Skyrim",
            capa: "assets/jogos/skyrim.jpg",
            desenvolvedora: "Bethesda Game Studios",
            genero: "RPG",
            totalConquistas: 75,
            lancamento: 2011,
            recomendado: true
        },
        {
            id: 11,
            titulo: "The Elder Scrolls IV: Oblivion",
            capa: "assets/jogos/oblivion.jpg",
            desenvolvedora: "Bethesda Game Studios",
            genero: "RPG",
            totalConquistas: 60,
            lancamento: 2006,
            recomendado: false
        },
        {
            id: 12,
            titulo: "Fallout: New Vegas",
            capa: "assets/jogos/fallout-new-vegas.jpg",
            desenvolvedora: "Obsidian Entertainment",
            genero: "RPG",
            totalConquistas: 75,
            lancamento: 2010,
            recomendado: true
        },
        {
            id: 13,
            titulo: "Fallout 4",
            capa: "assets/jogos/fallout-4.jpg",
            desenvolvedora: "Bethesda Game Studios",
            genero: "RPG",
            totalConquistas: 84,
            lancamento: 2015,
            recomendado: false
        },
        {
            id: 14,
            titulo: "The Witcher 2: Assassins of Kings",
            capa: "assets/jogos/witcher-2.jpg",
            desenvolvedora: "CD Projekt Red",
            genero: "RPG",
            totalConquistas: 50,
            lancamento: 2011,
            recomendado: false
        },
        {
            id: 15,
            titulo: "The Witcher",
            capa: "assets/jogos/witcher.jpg",
            desenvolvedora: "CD Projekt Red",
            genero: "RPG",
            totalConquistas: 0,
            lancamento: 2007,
            recomendado: false
        },
        {
            id: 16,
            titulo: "Dragon Age: Origins",
            capa: "assets/jogos/dragon-age-origins.jpg",
            desenvolvedora: "BioWare",
            genero: "RPG",
            totalConquistas: 72,
            lancamento: 2009,
            recomendado: true
        },
        {
            id: 17,
            titulo: "Dragon Age: Inquisition",
            capa: "assets/jogos/dragon-age-inquisition.jpg",
            desenvolvedora: "BioWare",
            genero: "RPG",
            totalConquistas: 69,
            lancamento: 2014,
            recomendado: false
        },
        {
            id: 18,
            titulo: "Mass Effect Legendary Edition",
            capa: "assets/jogos/mass-effect-legendary-edition.jpg",
            desenvolvedora: "BioWare",
            genero: "RPG",
            totalConquistas: 127,
            lancamento: 2021,
            recomendado: false
        },
        {
            id: 19,
            titulo: "Red Dead Redemption 2",
            capa: "assets/jogos/red-dead-redemption-2.jpg",
            desenvolvedora: "Rockstar Games",
            genero: "Ação e aventura",
            totalConquistas: 51,
            lancamento: 2018,
            recomendado: true
        },
        {
            id: 20,
            titulo: "Elden Ring",
            capa: "assets/jogos/elden-ring.jpg",
            desenvolvedora: "FromSoftware",
            genero: "RPG",
            totalConquistas: 42,
            lancamento: 2022,
            recomendado: true
        },
        {
            id: 21,
            titulo: "Dark Souls III",
            capa: "assets/jogos/dark-souls-3.jpg",
            desenvolvedora: "FromSoftware",
            genero: "RPG",
            totalConquistas: 43,
            lancamento: 2016,
            recomendado: false
        },
        {
            id: 22,
            titulo: "Sekiro: Shadows Die Twice",
            capa: "assets/jogos/sekiro.jpg",
            desenvolvedora: "FromSoftware",
            genero: "Ação e aventura",
            totalConquistas: 34,
            lancamento: 2019,
            recomendado: false
        },
        {
            id: 23,
            titulo: "Dragon's Dogma 2",
            capa: "assets/jogos/dragons-dogma-2.jpg",
            desenvolvedora: "Capcom",
            genero: "RPG",
            totalConquistas: 55,
            lancamento: 2024,
            recomendado: false
        },
        {
            id: 24,
            titulo: "Mount & Blade II: Bannerlord",
            capa: "assets/jogos/mount-and-blade-2.jpg",
            desenvolvedora: "TaleWorlds Entertainment",
            genero: "RPG",
            totalConquistas: 50,
            lancamento: 2022,
            recomendado: true
        },
        {
            id: 25,
            titulo: "Disco Elysium",
            capa: "assets/jogos/disco-elysium.jpg",
            desenvolvedora: "ZA/UM",
            genero: "RPG",
            totalConquistas: 45,
            lancamento: 2019,
            recomendado: true
        },
        {
            id: 26,
            titulo: "Pillars of Eternity",
            capa: "assets/jogos/pillars-of-eternity.jpg",
            desenvolvedora: "Obsidian Entertainment",
            genero: "RPG",
            totalConquistas: 54,
            lancamento: 2015,
            recomendado: false
        },
        {
            id: 27,
            titulo: "Pathfinder: Wrath of the Righteous",
            capa: "assets/jogos/pathfinder-wrath-of-the-righteous.jpg",
            desenvolvedora: "Owlcat Games",
            genero: "RPG",
            totalConquistas: 95,
            lancamento: 2021,
            recomendado: false
        },
        {
            id: 28,
            titulo: "GreedFall",
            capa: "assets/jogos/greedfall.jpg",
            desenvolvedora: "Spiders",
            genero: "RPG",
            totalConquistas: 63,
            lancamento: 2019,
            recomendado: false
        },
        {
            id: 29,
            titulo: "Vampyr",
            capa: "assets/jogos/vampyr.jpg",
            desenvolvedora: "DONTNOD Entertainment",
            genero: "RPG",
            totalConquistas: 28,
            lancamento: 2018,
            recomendado: false
        },
        {
            id: 30,
            titulo: "Deus Ex: Mankind Divided",
            capa: "assets/jogos/deus-ex-mankind-divided.jpg",
            desenvolvedora: "Eidos-Montréal",
            genero: "RPG",
            totalConquistas: 71,
            lancamento: 2016,
            recomendado: false
        },
        {
            id: 31,
            titulo: "Dishonored 2",
            capa: "assets/jogos/dishonored-2.jpg",
            desenvolvedora: "Arkane Studios",
            genero: "Ação e aventura",
            totalConquistas: 50,
            lancamento: 2016,
            recomendado: false
        },
        {
            id: 32,
            titulo: "Prey",
            capa: "assets/jogos/prey.jpg",
            desenvolvedora: "Arkane Studios",
            genero: "Ação e aventura",
            totalConquistas: 48,
            lancamento: 2017,
            recomendado: false
        },
        {
            id: 33,
            titulo: "The Outer Worlds",
            capa: "assets/jogos/the-outer-worlds.jpg",
            desenvolvedora: "Obsidian Entertainment",
            genero: "RPG",
            totalConquistas: 67,
            lancamento: 2019,
            recomendado: false
        },
        {
            id: 34,
            titulo: "Horizon Zero Dawn",
            capa: "assets/jogos/horizon-zero-dawn.jpg",
            desenvolvedora: "Guerrilla Games",
            genero: "Ação e aventura",
            totalConquistas: 79,
            lancamento: 2017,
            recomendado: false
        },
        {
            id: 35,
            titulo: "Ghost of Tsushima",
            capa: "assets/jogos/ghost-of-tsushima.jpg",
            desenvolvedora: "Sucker Punch Productions",
            genero: "Ação e aventura",
            totalConquistas: 77,
            lancamento: 2020,
            recomendado: false
        },
        {
            id: 36,
            titulo: "Assassin's Creed Odyssey",
            capa: "assets/jogos/assassins-creed-odyssey.jpg",
            desenvolvedora: "Ubisoft",
            genero: "RPG",
            totalConquistas: 93,
            lancamento: 2018,
            recomendado: false
        },
        {
            id: 37,
            titulo: "Assassin's Creed Valhalla",
            capa: "assets/jogos/assassins-creed-valhalla.jpg",
            desenvolvedora: "Ubisoft",
            genero: "RPG",
            totalConquistas: 92,
            lancamento: 2020,
            recomendado: false
        },
        {
            id: 38,
            titulo: "Metro Exodus",
            capa: "assets/jogos/metro-exodus.jpg",
            desenvolvedora: "4A Games",
            genero: "FPS",
            totalConquistas: 68,
            lancamento: 2019,
            recomendado: false
        },
        {
            id: 39,
            titulo: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
            capa: "assets/jogos/stalker-2.jpg",
            desenvolvedora: "GSC Game World",
            genero: "FPS",
            totalConquistas: 58,
            lancamento: 2024,
            recomendado: false
        },
        {
            id: 40,
            titulo: "Terraria",
            capa: "assets/jogos/terraria.jpg",
            desenvolvedora: "Re-Logic",
            genero: "Sandbox",
            totalConquistas: 115,
            lancamento: 2011,
            recomendado: false
        },
        {
            id: 41,
            titulo: "Subnautica",
            capa: "assets/jogos/subnautica.jpg",
            desenvolvedora: "Unknown Worlds Entertainment",
            genero: "Sobrevivência",
            totalConquistas: 17,
            lancamento: 2018,
            recomendado: true
        },
        {
            id: 42,
            titulo: "Valheim",
            capa: "assets/jogos/valheim.jpg",
            desenvolvedora: "Iron Gate Studio",
            genero: "Sobrevivência",
            totalConquistas: 0,
            lancamento: 2021,
            recomendado: false
        },
        {
            id: 43,
            titulo: "RimWorld",
            capa: "assets/jogos/rimworld.jpg",
            desenvolvedora: "Ludeon Studios",
            genero: "Simulação",
            totalConquistas: 0,
            lancamento: 2018,
            recomendado: false
        },
        {
            id: 44,
            titulo: "Project Zomboid",
            capa: "assets/jogos/project-zomboid.jpg",
            desenvolvedora: "The Indie Stone",
            genero: "Sobrevivência",
            totalConquistas: 0,
            lancamento: 2013,
            recomendado: false
        },
        {
            id: 45,
            titulo: "Don't Starve",
            capa: "assets/jogos/dont-starve.jpg",
            desenvolvedora: "Klei Entertainment",
            genero: "Sobrevivência",
            totalConquistas: 0,
            lancamento: 2013,
            recomendado: false
        },
        {
            id: 46,
            titulo: "Hades",
            capa: "assets/jogos/hades.jpg",
            desenvolvedora: "Supergiant Games",
            genero: "Roguelike",
            totalConquistas: 49,
            lancamento: 2020,
            recomendado: false
        },
        {
            id: 47,
            titulo: "Hollow Knight",
            capa: "assets/jogos/hollow-knight.jpg",
            desenvolvedora: "Team Cherry",
            genero: "Metroidvania",
            totalConquistas: 63,
            lancamento: 2017,
            recomendado: true
        },
        {
            id: 48,
            titulo: "Celeste",
            capa: "assets/jogos/celeste.jpg",
            desenvolvedora: "Maddy Makes Games",
            genero: "Plataforma",
            totalConquistas: 30,
            lancamento: 2018,
            recomendado: false
        },
        {
            id: 49,
            titulo: "Dave the Diver",
            capa: "assets/jogos/dave-the-diver.jpg",
            desenvolvedora: "MINTROCKET",
            genero: "Aventura",
            totalConquistas: 43,
            lancamento: 2023,
            recomendado: false
        },
        {
            id: 50,
            titulo: "DREDGE",
            capa: "assets/jogos/dredge.jpg",
            desenvolvedora: "Black Salt Games",
            genero: "Aventura",
            totalConquistas: 40,
            lancamento: 2023,
            recomendado: false
        },
        {
            id: 51,
            titulo: "Cult of the Lamb",
            capa: "assets/jogos/cult-of-the-lamb.jpg",
            desenvolvedora: "Massive Monster",
            genero: "Roguelike",
            totalConquistas: 37,
            lancamento: 2022,
            recomendado: false
        },
        {
            id: 52,
            titulo: "Slay the Spire",
            capa: "assets/jogos/slay-the-spire.jpg",
            desenvolvedora: "Mega Crit",
            genero: "Estratégia",
            totalConquistas: 46,
            lancamento: 2019,
            recomendado: false
        },
        {
            id: 53,
            titulo: "Ori and the Will of the Wisps",
            capa: "assets/jogos/ori-and-the-will-of-the-wisps.jpg",
            desenvolvedora: "Moon Studios",
            genero: "Plataforma",
            totalConquistas: 37,
            lancamento: 2020,
            recomendado: false
        }


    ],

    usuarioLogadoId: null
};
