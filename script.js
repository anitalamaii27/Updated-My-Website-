<<<<<<< HEAD
// Function to format time using locale-specific options
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

function formatTime(date) {
    return date.toLocaleDateString('en-US', options);
}

// Function to show and continuously update time
function showTime() {
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        const now = new Date();
        currentTimeElement.innerHTML = formatTime(now);
    } else {
        console.error('Element with ID "currentTime" not found.');
    }
}

showTime();
setInterval(showTime, 1000);

// Update Projects Dynamically
const projects = [
    "This Website",
    "A basic calculator Website/app",
    "To-do List Website/app",
    "Personal Blog",
    "Weather app",
    "Chat Application",
    "Expense Tracker",
    "Basic Firewall",
    "Vulnerability Assessment Tool"
];


function renderProjects() {
    const projectsContainer = document.querySelector('.projects-list');
    projectsContainer.innerHTML = ''; // Clear existing items
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectsContainer.appendChild(listItem);
    });
}

renderProjects();
=======
// Function to format time using locale-specific options
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

function formatTime(date) {
    return date.toLocaleDateString('en-US', options);
}

// Function to show and continuously update time
function showTime() {
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        const now = new Date();
        currentTimeElement.innerHTML = formatTime(now);
    } else {
        console.error('Element with ID "currentTime" not found.');
    }
}

showTime();
setInterval(showTime, 1000);

// Update Projects Dynamically
const projects = [
    "This Website",
    "A basic calculator app",
    "To-do List app",
    "Personal Blog",
    "Weather app",
    "Chat Application",
    "Expense Tracker",
    "Basic Firewall",
    "Vulnerability Assessment Tool"
];

function renderProjects() {
    const projectsContainer = document.querySelector('.projects-list');
    projectsContainer.innerHTML = ''; // Clear existing items
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectsContainer.appendChild(listItem);
    });
}

renderProjects();
>>>>>>> c05be82fadfc86d372aa07d0e95829864a940382
