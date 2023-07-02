Deployment URL: 

Server-side Documentation
This is the server-side documentation for the application. The server is responsible for handling API requests and interacting with the database.

Installation
Clone the repository: git clone [repository-url]
Navigate to the server directory: cd server
Install the dependencies: npm install
Configuration
Open the server.js file.
Update the MongoDB connection URL in the mongoose.connect function to match your MongoDB server configuration.
If needed, update the server port in the app.listen function.
Running the Server
To start the server, run the following command:

bash
Copy code
npm start
The server will be running at http://localhost:3001.

API Routes
POST /books - Create a new book. Requires a JSON payload with title, author, and genre properties.
GET /books - Get all books.
GET /books/:id - Get a specific book by its ID.
PUT /books/:id - Update a book by its ID. Requires a JSON payload with the updated book details.
DELETE /books/:id - Delete a book by its ID.
Dependencies
Express
body-parser
mongoose
cors
