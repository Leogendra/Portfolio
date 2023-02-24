const GatienH_Portfolio = {
    Languages: ['react', 'css', 'html'],
    GitHubRepo: 'https://github.com/MqxBrt/MB-net',
    Name: 'GatienH-Portfolio',
    Date: 'Mars 2023 - Novembre 2022',
    ImageLight: 'portfolio_light.png',
    ImageDark: 'portfolio_dark.png',
    Comment: 'Site internet React MUI',
    Description: 'Site internet ayant pour but d\'être un portfolio.',
    PreviewURL: 'gatienh-portfolio',
    Type: 'personal'
};

const Inter2Hut = {
    Languages: ['python', 'git'],
    GitHubRepo: 'https://github.com/Gaiko19/INTER2-HUT',
    Name: 'INTER2-HUT',
    Date: 'Novembre 2021 - Mai 2022',
    ImageLight: 'inter2hut_light.png',
    ImageDark: 'inter2hut_dark.png',
    Comment: 'Application Python avec CLI',
    Description: 'L\'application permet de trier un corpus de mail extrait de Thunderbird fournit par l\'utilisateur et d\'en sortir les marqueurs de l\'interdisciplinarité. Réalisé lors du projet de Licence 3.',
    PreviewURL: 'inter2-hut',
    Type: 'school'
};

const Quarto = {
    Languages: ['python'],
    GitHubRepo: 'https://github.com/Leogendra/Quatro',
    Name: 'Quarto',
    Date: 'Printemps 2020',
    ImageLight: 'quarto_light.png',
    ImageDark: 'quarto_dark.png',
    Comment: 'Jeu Python avec GUI',
    Description: 'Le but du jeu est d\'aligner quatre pièces ayant une propriété commune (taille, couleur, forme, trou) en les posant une par une chacun son tour sur un damier de 4x4. Réalisé lors du projet de Licence 1.',
    PreviewURL: 'quarto',
    Type: 'school'
};

// Newer projects first
const projectsArray = [
    GatienH_Portfolio,
    Inter2Hut,
    Quarto
]
export default projectsArray;