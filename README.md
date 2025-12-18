User Management Dashboard
Hey! Thanks for checking out my project. I built this simple User Management app to practice my CRUD (Create, Read, Update, Delete) skills using the Node/Express stack. It’s got a clean, dark-mode dashboard styled with Tailwind CSS and uses MongoDB to keep everything organized.

What’s inside?
Dark Dashboard: A sleek UI to see all your users at a glance.

Full CRUD: You can add new users, view their specific details, edit their info, or delete them entirely.

Mongoose Integration: Everything is hooked up to a MongoDB database.

Clean Code: I've added comments to the main files so you can follow the logic easily.

🛠 Tech Stack
Server: Node.js & Express

Database: MongoDB & Mongoose

Templates: EJS (with some logic for dynamic lists)

Styling: Tailwind CSS (CDN version)

🚀 How to get this running on your machine
I kept the setup pretty straightforward:

Clone it: Download the files from this repo.

Install the "node_modules": Open your terminal in the project folder and run:

Bash

npm install
Check your DB: Make sure you have MongoDB running locally. The app looks for a database named User-Management on the default port 27017.

Fire it up: Run the server with:

Bash

node app.js
Open your browser: Go to http://localhost:3000/read to see the dashboard.

Project Structure
app.js - This is the heart of the app where all the routes live.

UserModel.js - Where the database connection and User schema are defined.

views/ - This folder holds all the EJS files for the screens you see (Index, Create, Edit, and View).

Feel free to fork this or use the code as a starting point for your own project!
