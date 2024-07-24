# WEEK THREE CODE CHALLENGE REDO

## AUTHOR : NELLY MATU

## DATE : 24TH JULY 2024

## LEARNING GOALS
 -Access information from an API using a GET request and use it to update the DOM
 -Listen for user events and update the DOM in response
 -Send data to an API using a POST request

 ## OBJECTIVE
  -For this assessment, your objective is to build a frontend for our monsters data. Currently provided below this page. Create a db.json file and store the data inside.

 ## API methods
 ### Get the list of monsters:

 GET http://localhost:3000/monsters


#### optional parameters:


_limit=[number] - limit the number of monsters returned
_page=[number] - offset your request for monsters to some page (must specify a limit)


example:


GET  http://localhost:3000/monsters/?_limit=20&_page=3


sample response:
[
  {
    "name": "Chronos",
    "age": 4005.302453418598,
    "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
    "id": 1
  },
  {
    "name": "Tartarus",
    "age": 1874.4913565609456,
    "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
    "id": 2
  },
  {
    "name": "Hemera",
    "age": 4094.8375978925988,
    "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
    "id": 3
  }
]


Create a monster:
POST http://localhost:3000/monsters 
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}


body:
{ name: string, age: number, description: string }


### Use data from the below link to populate your db.json data

 https://api.npoint.io/4feac36f41d8e0decc70 

 `-NB: Remember to deploy both your frontend and your db.json when done.`

 ### HOW IT WORKS
   -This application fetches a list of monsters from a backend API. It then displays the first 50 monsters, including their names, ages, and descriptions, in a list format. When a user clicks on a monster's name from the list, detailed information about the selected monster, including its name, age, and description, is displayed. The application includes a form that allows users to create a new monster by inputting its name, age, and description. Upon form submission, the new monster is added to the list and saved to the backend API. The application listens for user events, such as clicking on a monster's name or submitting the form, and updates the DOM accordingly to reflect these changes. Users can also delete monsters from the list, and these deletions are reflected both in the DOM and the backend API.


### Getting Started
To set up the project locally, follow these steps:

- Clone this repository to your local machine.
- Ensure you have Node.js installed.
- Install dependencies using npm install.
- Start the JSON server by running npm run server.
- Open index.html in your browser to view the application.

#### Project Structure
The project structure is as follows:

- index.html: Main HTML file for the application.
- style.css: CSS file for styling the application.
- script.js: JavaScript file containing the logic for fetching data, updating the UI, and handling user interactions.
- db.json: JSON file serving as the database with movie data.

### System Requirements
- Node 18+
- A browser capable for running JavaScript (Chrome, Firefox, Safari or Edge)
- Operating System(Windows 10+, MacOS, Linus, etc.)
- A text editor capable of running JavaScript(Vs Code, Vim, Nano, - - Emacs, Atom, Subline Text, ect.)
- RAM >= 4GB
- Disk space >= 1GB

## INSTALLATION
- To use this follow these steps:

### Alternative One
1.Open your terminal/cli on your computer. 2.Clone the repository by running the following command:

 git clone git@github.com:NellyMatu/week3-code-challenge-redo.git

3.Change directory to the repo folder

    cd week3-code-challenge-redo
4.Open it in your Code Editor of choice. If you use VS Code, run the command:

    code .

### Alternative Two
1.On the top right corner of this page there is a button labelled Fork.

2.Click on that button to create a copy of the repository to your own account.

3.Follow the process described in Alternative One above.

4.Remember to replace your username when cloning.

    git clone https://github.com/NellyMatu/week3-code-challenge-redo.git

### Getting the files
*fork the repo Create a new branch in your terminal Install the prerequisite. Make appropriate changes in files. Run the server to see the changes Add the changes and commit them Push to the branch Create a pull request

Open the folder location on the terminal and use the following command to run the app:

### VERCEL LINK(LIVE LINK)
[live link to my webiste](https://week3-code-challenge-redo.vercel.app/)

### HOW TO RUN ALL CODES
clone the repository run using live server

### DEPENDENCIES
practice js, HTML, CSS ,JSON Server

### TECHNOLOGIES USED
HTML/CSS: This is the structure and styling.
JavaScript: It is a language used for adding, marking, and clearing items dynamically.
JSON Server

## CONTACT INFO
.Email nmatu308@gmail.com

## LICENSE
MIT License Copyright (c) 2024 Nelly Matu