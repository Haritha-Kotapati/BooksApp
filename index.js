// index.js
const express = require('express');
const path = require('path');
const booksApi = require('./modules/books/booksApi');
const pexelsApi = require('./modules/pexels/pexelsApi');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set the views directory and the view engine(pug)
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Route for rendering the searchpage
app.get('/',async (req,res) => {
    try {
        // Fetch random images for each genre
        const genreImagesPromises = pexelsApi.genres.map(async (genre) => {
          const images = await pexelsApi.getRandomImageForCategory(genre.value);
          return { ...genre, images };
          
        });
    const genreImages = await Promise.all(genreImagesPromises);
    console.log(genreImages);
    
    res.render('search',{genres : genreImages});//pass the genres array to the search page
    
    } catch (error) {
        console.error('Error on / route', error);
        res.status(500).json({ error: 'Unable to fetch genre information.' });
      }  

});

// Route to handle form submission and searching books and display them in list
app.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        const booksData = await booksApi.getBooksByQuery(query);
        res.render('bookList', { books: booksData });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch book information.' });
    }
});

// Route to handle category selection and display books accordingly
app.get('/category', async (req, res) => {
    try {
        const { category } = req.query;
        const booksData = await booksApi.getBooksByCategory(category);
        res.render('bookList', { books: booksData });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch book information.' });
    }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
