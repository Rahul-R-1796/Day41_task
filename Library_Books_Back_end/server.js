const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String
});

const Book = mongoose.model('Book', bookSchema);

app.post('/books', (req, res) => {
  const newBook = new Book(req.body);
  newBook.save()
    .then(() => {
      res.send('Book created successfully');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/books', (req, res) => {
  Book.find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        res.status(404).send('Book not found');
      } else {
        res.send(book);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.send('Book updated successfully');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/books/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Book deleted successfully');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
