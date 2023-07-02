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
