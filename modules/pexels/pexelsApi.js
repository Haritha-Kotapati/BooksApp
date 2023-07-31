// modules/pexels/pexelsApi.js
const axios = require('axios');
require('dotenv').config();

const genres = [
    { value: "fantasy", text: "Fantasy" },
    { value: "comedy", text: "Comedy" },
    { value: "romance", text: "Romance" },
    { value: "action", text: "Action" },
    { value: "thriller", text: "Thriller" },
    { value: "crime", text: "Crime" },
    // Add more genre objects as needed
];

async function getRandomImageForCategory(category) {
    const apiKey = process.env.IMAGE_PEXELS_API_KEY;
    const apiUrl = `https://api.pexels.com/v1/search?query=${category}&per_page=5`;
    const headers = {
        Authorization: apiKey,
    };

    try {
        const response = await axios.get(apiUrl, { headers });
        if (response.data.photos && response.data.photos.length > 0) {
            return response.data.photos.map((photo) => photo.src.medium);
        } else {
            console.error('No images found in the API response for category:', category);
            return [];
        }
    } catch (error) {
        console.error('Error fetching image from Pexels API', error.message);
        return [];
    }
}

module.exports = {
    getRandomImageForCategory,
    genres
};
