// modules/books/booksApi.js
const axios = require('axios');
require('dotenv').config();

async function getBooksByQuery(query) {
    try {
        const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
        const booksResponse = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=5`
        );

        const booksData = booksResponse.data.items.map((book) => ({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || null,
        }));

        return booksData;
    } catch (error) {
        throw new Error('Unable to fetch book information.');
    }
}

async function getBooksByCategory(category) {
    try {
        const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
        const booksResponse = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=${apiKey}&maxResults=5`
        );

        const booksData = booksResponse.data.items.map((book) => ({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || null,
        }));

        return booksData;
    } catch (error) {
        throw new Error('Unable to fetch book information.');
    }
}

module.exports = {
    getBooksByQuery,
    getBooksByCategory
};
