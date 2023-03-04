const SpotyMatch = {
    Languages: ['html', 'css', 'js'],
    GitHubRepo: '',
    Site: 'https://leogendra.github.io/SpotyMatch/',
    Name: 'SpotyMatch',
    Date: 'Mars 2023',
    ImageLight: 'spotymatch_light.png',
    ImageDark: 'spotymatch_dark.png',
    Comment: 'Jeu pour connaitre ses préférences musicales',
    Description: 'Site web en pure JS/CSS permettant de déterminer de choisir des musiques deux-à-deux, et de déterminer un classement.',
    PreviewURL: 'SpotyMatch',
    Type: 'personal'
};

const GatienH_Portfolio = {
    Languages: ['react', 'css'],
    GitHubRepo: 'https://github.com/Leogendra/Portfolio',
    Site: '',
    Name: 'GatienH-Portfolio',
    Date: 'Fevrier 2023',
    ImageLight: 'portfolio_light.png',
    ImageDark: 'portfolio_dark.png',
    Comment: 'Portfolio réalisé en ReactJS',
    Description: 'Site internet ayant pour but d\'être un portfolio.',
    PreviewURL: 'gatienh-portfolio',
    Type: 'personal'
};

const quizz_capitales = {
    Languages: ['react', 'css', 'js'],
    GitHubRepo: 'https://github.com/Leogendra/Quizz-Geographie',
    Site: '',
    Name: 'Quizz Géographie',
    Date: 'Janvier 2023',
    ImageLight: 'quizz_geo_light.png',
    ImageDark: 'quizz_geo_dark.png',
    Comment: 'Web app pour s\'entrainer à la géographie',
    Description: 'Premier projet en ReactJs, il s\'agit d\'une application web permettant de s\'entrainer à reconnaitee les drapeaux des pays.',
    PreviewURL: 'quizz-geographie',
    Type: 'personal'
};

const julia = {
    Languages: ['python'],
    GitHubRepo: '',
    Site: '',
    Name: 'Ensembles de Julia et Mandelbrot',
    Date: 'Octobre 2022',
    ImageLight: 'julia_light.png',
    ImageDark: 'julia_dark.png',
    Comment: 'Simulation d\'ensemble de Julia/Mandelbrolt',
    Description: "Les ensemble de Julia sont des ensembles de nombres complexes défini par une fonction itérative, donnant naissance à des fractales. Ce script python calcule les cordonées des points de l'ensemble de Julia et les affiche dans le terminal.",
    PreviewURL: 'Julia-et-Mandelbrot',
    Type: 'personal'
};

const coloration = {
    Languages: ['c'],
    GitHubRepo: 'https://github.com/Leogendra/coloration-de-graphes-repartis',
    Site: '',
    Name: 'Coloration de graphes répartis',
    Date: 'Automne 2022',
    ImageLight: 'coloration_light.png',
    ImageDark: 'coloration_dark.png',
    Comment: "Coloration de clients reliés par des sockets",
    Description: "Ce projet consiste à colorer un graphe constitué de clients reliés par des sockets. Le but est de colorer le graphe de manière à ce que chaque client ait une couleur différente de ses voisins.",
    PreviewURL: 'coloration-de-graphe',
    Type: 'school'
};

const aoc = {
    Languages: ['python'],
    GitHubRepo: 'https://github.com/Leogendra/Advent-of-Code',
    Site: '',
    Name: 'Advent of Code',
    Date: 'Décembre 2021-2022',
    ImageLight: 'aoc_light.png',
    ImageDark: 'aoc_dark.png',
    Comment: 'Concours de programmation',
    Description: 'Chaque année, l\'Advent of Code se déroule en décembre et propose un problème par jour avant Noel. Il s\'agit de résoudre des problèmes de programmation et d\'algorithmique de difficulté croissante en un minimum de temps.',
    PreviewURL: 'Advent-of-Code',
    Type: 'personal'
};

const Inter2Hut = {
    Languages: ['python', 'git'],
    GitHubRepo: 'https://github.com/Gaiko19/INTER2-HUT',
    Site: '',
    Name: 'INTER2-HUT',
    Date: 'Novembre 2021 - Mai 2022',
    ImageLight: 'inter2hut_light.png',
    ImageDark: 'inter2hut_dark.png',
    Comment: 'Application Python avec CLI',
    Description: 'L\'application permet de trier un corpus de mail extrait de Thunderbird fournit par l\'utilisateur et d\'en sortir les marqueurs de l\'interdisciplinarité. Réalisé lors du projet de Licence 3.',
    PreviewURL: 'inter2-hut',
    Type: 'school'
};

const kavarm = {
    Languages: ['js', 'css', 'mysql', 'php'],
    GitHubRepo: '',
    Site: 'https://kavarm.adam-net.fr',
    Name: 'Kavarm',
    Date: '2021-2023',
    ImageLight: 'kavarm_light.png',
    ImageDark: 'kavarm_dark.png',
    Comment: 'Jeu web type question/réponses',
    Description: "Kavarm est un jeu de type question/réponses en ligne, permettant de jouer à plusieurs en temps réel",
    PreviewURL: 'Kavarm',
    Type: 'personal'
};

const tournois = {
    Languages: ['php', 'mysql', 'js'],
    GitHubRepo: '',
    Site: 'https://tournoi.adam-net.fr/',
    Name: 'Manageur de Tournois',
    Date: 'Hivers 2021',
    ImageLight: 'tournois_light.png',
    ImageDark: 'tournois_dark.png',
    Comment: 'Application Web pour gestion de tournois',
    Description: "Application web permettant de gérer des tournois en tout genre avec stockage en base de données. Réalisé lors du projet de Licence 2.",
    PreviewURL: 'Manageur-de-Tournois',
    Type: 'school'
};

const Quarto = {
    Languages: ['python'],
    GitHubRepo: 'https://github.com/Leogendra/Quatro',
    Site: '',
    Name: 'Quarto',
    Date: 'Printemps 2020',
    ImageLight: 'quarto_light.png',
    ImageDark: 'quarto_dark.png',
    Comment: 'Jeu Python avec GUI Tkinter',
    Description: 'Le but du jeu est d\'aligner quatre pièces ayant une propriété commune (taille, couleur, forme, trou) en les posant une par une chacun son tour sur un damier de 4x4. Réalisé lors du projet de Licence 1.',
    PreviewURL: 'quarto',
    Type: 'school'
};

// Ordre chronologique
const projectsArray = [
    SpotyMatch,
    GatienH_Portfolio,
    kavarm,
    quizz_capitales,
    coloration,
    aoc,
    julia,
    Inter2Hut,
    tournois,
    Quarto
]
export default projectsArray;