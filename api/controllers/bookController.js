const books = [
  {
    id: 'b1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Software Engineering',
    condition: 'New',
    description: 'A handbook of agile software craftsmanship.'
  },
  {
    id: 'b2',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    condition: 'Used',
    description: 'A fantasy adventure about a hobbit on an unexpected journey.'
  }
];

const getAllBooks = (req, res) => {
  const safeBooks = books.map(({ id, title, author, genre, condition }) => ({
    id,
    title,
    author,
    genre,
    condition
  }));

  res.status(200).json({ count: safeBooks.length, data: safeBooks });
};

const getBookById = (req, res) => {
  const { id } = req.params;

  if (!/^[a-zA-Z0-9-]+$/.test(id)) {
    return res.status(400).json({ error: 'Invalid book ID format' });
  }

  const book = books.find((item) => item.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json({ data: book });
};

const createBook = (req, res) => {
  const { title, author, genre, condition, description } = req.body;

  const newBook = {
    id: `b${books.length + 1}`,
    title,
    author,
    genre,
    condition,
    description
  };

  books.push(newBook);

  res.status(201).json({ message: 'Book created', data: newBook });
};

module.exports = { getAllBooks, getBookById, createBook };