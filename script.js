// API URL
const apiUrl = "http://localhost:3000/monsters";

// Select elements from the DOM
const monsterContainer = document.querySelector("#monster-container");
const monsterForm = document.querySelector("#monster-form");

// Initialize the app by fetching and displaying monsters when the page loads
window.onload = () => {
    fetchMonsters(); // Fetch and display the first 50 monsters
};

// Function to fetch and display monsters
function fetchMonsters(limit = 50, page = 1) {
    // Construct the URL with query parameters
    const url = `${apiUrl}?_limit=${limit}&_page=${page}`;
    
    // Fetch the monsters from the API
    fetch(url)
        .then(response => response.json()) // Parse the JSON response
        .then(monsters => {
            monsterContainer.innerHTML = ''; // Clear existing monsters
            monsters.forEach(displayMonster); // Display each monster
        })
        .catch(error => console.error('Error fetching monsters:', error));
}

// Function to display a monster's details
function displayMonster(monster) {
    // Create a new list item for the monster
    const monsterItem = document.createElement('li');
    monsterItem.className = 'item';
    monsterItem.innerHTML = `
        <div class="content">
            <div class="header">${monster.name}</div>
            <div class="description">
                <strong>Age:</strong> ${monster.age}<br>
                <strong>Description:</strong> ${monster.description}
            </div>
        </div>
    `;
    // Add the monster item to the container
    monsterContainer.appendChild(monsterItem);
}

// Function to handle creating a new monster
function createMonster(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the input fields
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const description = document.querySelector("#description").value;

    // Create a new monster object
    const newMonster = {
        name: name,
        age: parseFloat(age),
        description: description
    };

    // Send a POST request to the API to create the new monster
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newMonster) // Convert the newMonster object to JSON
    })
    .then(response => response.json()) // Parse the JSON response
    .then(newMonster => {
        // Display the newly created monster
        displayMonster(newMonster);
        // Clear the form fields
        document.querySelector("#name").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#description").value = "";
    })
    .catch(error => console.error('Error creating monster:', error));
}

// Event listener for the create monster form submission
monsterForm.addEventListener("submit", createMonster);
