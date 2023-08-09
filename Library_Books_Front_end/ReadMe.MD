# Front_end  Deployment Please Use This Deployment URL: https://day-41-task-zw6a.onrender.com/


Install Node.js on your machine if you haven't already.
Create a new directory for your project and navigate to it in your terminal.

Run the following command to initialize a new Node.js project:
npm init -y

Install the Express framework by running the following command:
npm install express

Deployment URL: https://64a1941ba3ef6d604b7df34f--soft-lily-28a431.netlify.app/


Front-end (Client) Documentation
This is the front-end (client-side) documentation for the application. This application is built using React for the user interface.

Installation
Clone the repository: git clone [repository-url]
Navigate to the client directory: cd client
Install the dependencies: npm install
Configuration
Open the client/src/Books.js file.
Update the API URL in the fetchBooks, createBook, deleteBook, editBook, and updateBook functions to match the server-side API URL.
Running the Application
To start the application, run the following command:

bash
Copy code
npm start
The application will be available at http://localhost:3000(default).

Usage
The application allows you to add new books by filling in the required details and clicking the "Add Book" button.
Existing books are listed on the page. You can delete a book by clicking the "Delete" button next to it.
To edit a book, click the "Edit" button, make the necessary changes, and click the "Save" button.
To cancel editing, click the "Cancel" button.

Dependencies
React
axios
