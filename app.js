// @ts-check
import express from 'express';
import UserModel from './UserModel.js';

const app = express();

// Set the port for the server to listen on
app.listen(3000);

// Set EJS as the templating engine for rendering views
app.set("view engine", "ejs");

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data from HTML forms
app.use(express.urlencoded({ extended: true }));

// GET: Render the page containing the form to create a new user
app.get('/create', (req, res) => {
    res.render('create');
});

// POST: Handle the form submission to create a new user in the database
app.post('/create-user', async (req, res) => {
    const NewUser = await UserModel.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        image: req.body.image
    });
    console.log("User is created");
    res.redirect('/read');
});

// POST: Handle user deletion using the unique User ID from the URL
app.post('/delete/:UserId', async (req, res) => {
    const userId = req.params.UserId;

    try {
        // Find the user by ID and remove them from the database
        const deletedUser = await UserModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send('User not found.');
        }

        // After deletion, refresh the list view
        res.redirect('/read');
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Deletion failed due to an error.");
    }
});

// GET: Fetch all users from the database and display them on the index page
app.get('/read', async (req, res) => {
    const User = await UserModel.find();
    res.render('index', { users: User });
});

// GET: Fetch a single user's details by their ID
app.get('/user/:UserId', async (req, res) => {
    const UserId = req.params.UserId;
    try {
        const User = await UserModel.findById(UserId);
        if (!User) {
            console.log('User not found');
        }
        res.render('user', { user: User });
    } catch (error) {
        console.log("An error occurred");
    }
});

// GET: Fetch user data and render the edit page with existing information
app.get('/edit/:UserId', async (req, res) => {
    const User = req.params.UserId;
    try {
        const UpdatedUser = await UserModel.findById(User);
        if (!UpdatedUser) {
            console.log('Cant Find the User');
        }
        res.render('edit', { user: UpdatedUser });
    } catch (error) {
        console.log("An error occurred");
    }
});

// POST: Update user details in the database using the ID provided in the URL
app.post('/edit-user/:UserId', async (req, res) => {
    const User = req.params.UserId;
    const UpdatedData = req.body;
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            User, 
            UpdatedData, 
            { new: true } // Returns the document after the update is applied
        );
        if (!updatedUser) {
            console.log("cant update the user");
        }
        res.redirect('/read');
    } catch (error) {
        console.log('An error has occurred');
    }
});