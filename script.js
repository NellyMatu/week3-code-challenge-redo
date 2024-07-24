// URL for fetching and posting monsters data
const apiUrl = "http://localhost:3000/monsters";

// Initialize the app by fetching and displaying monsters when the page loads
window.onload = () => {
 // Fetch and display the first 50 monsters
  fetchMonsters();
};

// Function to fetch and display the first 50 monsters
function fetchMonsters(limit = 50, page = 1) {
// Construct the apiUrl with query parameters
const apiUrl = `${apiUrl}/?_limit=${limit}&_page=${page}`;

// Fetch the monsters from the apiUrl 
    fetch(apiUrl)
    .then(response => response.json())
    .then(monsters => {
      monsters.forEach(displayMonster);// Display each monster
    });
}

// Select elements from the DOM using querySelector
const monsterContainer = document.querySelector("#monster-container");
const createMonsterForm = document.querySelector("#create-monster-form");

// Function to display a monster's details
function displayMonster(monster) {

  // Create a new div for the monster
  const monsterDiv = document.createElement("div");
  monsterDiv.className = "monster";
  
  // Create and set the monster's name element
  const monsterName = document.createElement("h2");
  monsterName.textContent = monster.name;

  // Create and set the monster's age element
  const monsterAge = document.createElement("p");
  monsterAge.textContent = `Age: ${monster.age}`;

  // Create and set the monster's description element
  const monsterDescription = document.createElement("p");
  monsterDescription.textContent = `Description: ${monster.description}`;

  // Add the elements to the monster div
  monsterDiv.appendChild(monsterName);
  monsterDiv.appendChild(monsterAge);
  monsterDiv.appendChild(monsterDescription);

  // Add the monster div to the monster container
  monsterContainer.appendChild(monsterDiv);
}

  // Function to handle creating a new monster
  function createMonster(event) {
  // Prevent the form from submitting
 event.preventDefault();

  //Get the values of the input fields
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
    body: JSON.stringify(newMonster)//convert to JSON
  })
  .then(response => response.json())//parse json response
  .then(displayMonster);//Display the newly created monster
  
  // Clear the form fields
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#description").value = "";
}

// Event listener for the create monster form submission
createMonsterForm.addEventListener("submit", createMonster);
