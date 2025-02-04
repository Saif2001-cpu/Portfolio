// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Loading
const projects = [
    {
        title: "Chat App", description: "A real-time chatting app built using React.js and Firebase.",
        link: "https://chat-app-nu-flame.vercel.app/"
    },
    {
        title: "E-commerce Store", description: "An e-commerce website developed using Express.js, Mongoose Schema, and JWT for authentication.",
        link: "https://github.com/Saif2001-cpu/E-Clothing"
    },
];

let projectIndex = 0;

function loadProjects() {
    const grid = document.getElementById('project-grid');
    for (let i = projectIndex; i < projectIndex + 2 && i < projects.length; i++) {
        const project = projects[i];
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        grid.appendChild(projectDiv);
    }
    projectIndex += 2;
    if (projectIndex >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

document.getElementById('load-more').addEventListener('click', loadProjects);

// Initialize first set of projects
loadProjects();

// Skill Progress Bars
document.querySelectorAll('.progress').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress;
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
        return;
    }

    // Simulate form submission
    document.getElementById('form-message').textContent = 'Message sent successfully!';
    this.reset();
});

// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});