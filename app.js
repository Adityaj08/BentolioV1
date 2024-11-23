const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// DOM elements
const currentProject = document.querySelector('.project-name');
const currentProjectImage = document.querySelector('.current-project-image');
const projectList = document.querySelector('.project-list');
const github = document.querySelector('.github');
const link = document.querySelector('.arrow');

// Project data
const projectObj = {
    'name': ['VS Code Redesign', 'CaesarCrypt', 'Starrygo', 'Orrange.in'],
    'imageUrl': ['./assets/imgs/revscode.png', './assets/imgs/caesarcrypt.png', './assets/imgs/starrygo.png', './assets/imgs/orannge.png'],
    'github': ['https://github.com/Adityaj08/VScodeRedesign', 'https://github.com/Adityaj08/CaesarCrypt', 'https://github.com/Adityaj08/starrygogh', 'https://github.com/Adityaj08/orannge.in'],
    'link': ['https://bit.ly/re-vscode', 'https://caesarcrypt.streamlit.app', 'https://bit.ly/starrygo', 'https://bit.ly/Orannge-in']
};

// Helper functions
const openGithub = (href) => window.open(href, '_blank');
const openLink = (href) => window.open(href, '_blank');

// Initialize project display
let currentGithubLink = projectObj.github[0];
let currentLinkLink = projectObj.link[0];

// Set up initial event listeners
github.addEventListener('click', () => openGithub(currentGithubLink));
link.addEventListener('click', () => openLink(currentLinkLink));

// Generate project list
projectList.innerHTML = projectObj.name
    .map((name, index) => `<li class="project-list-item"><p>${name}</p></li>`)
    .join('');

// Set initial project
currentProject.innerText = projectObj.name[0];
currentProjectImage.src = projectObj.imageUrl[0];

// Project selection handling
const projectListItems = document.querySelectorAll('.project-list-item');
projectListItems[0].style.display = "none";

projectListItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Show all items and hide selected
        projectListItems.forEach(i => i.style.display = "block");
        item.style.display = "none";

        // Update project display
        currentProject.innerText = projectObj.name[index];
        currentProjectImage.src = projectObj.imageUrl[index];
        currentGithubLink = projectObj.github[index];
        currentLinkLink = projectObj.link[index];
    });
});

// Mobile navigation
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav = document.querySelector(".mobile-navbar-links");

const toggleNavbar = () => {
    nav.classList.toggle("active");   
    mobile_nav.classList.toggle("active");
};

mobile_nav.addEventListener('click', toggleNavbar);
nav.addEventListener('click', () => {
    nav.classList.remove("active");   
    mobile_nav.classList.remove("active");
});
