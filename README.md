# My Book Search App

My Book Search App is a simple web application that allows users to search for their favorite books based on different categories or keywords. The app uses the Google Books API to fetch book information and displays the results in a user-friendly manner. It also uses images related to the genre of books and displays as thumbnail.

## Features

- Search: Users can search for books by entering keywords or book titles in the search box.
- Browse by Category: Users can browse books by different categories such as Fantasy, Comedy, Romance, Action, Thriller, Crime, etc.
- Random Genre Images: Each category is represented by a random image fetched from the Pexels API, making the app visually appealing.
- Book List: The app displays the search results or the list of books based on the selected category in a neat list format, including book title, author(s), description, and a thumbnail image.

## Installation

1. Clone the repository to your local machine using the following command:


2. Install the required dependencies using npm:


3. Set up the necessary environment variables by creating a `.env` file in the root directory and providing the required API keys:


4. Start the server by running:


5. Access the app in your browser at `http://localhost:3000`.

## Usage

- Enter keywords or book titles in the search box to search for books based on your query.
- Click on the "Browse by Category" section to view different genres. Clicking on a genre will display a list of books in that category.
- Navigate through the pages to view more books if available.

## Technologies Used

- Node.js
- Express.js
- Pug (Template Engine)
- Axios (HTTP client)
- Google Books API (for searching the books list)
- Pexels API (for random genre images)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.


## Acknowledgments

- Special thanks to [Pexels](https://www.pexels.com/) for providing the beautiful random genre images.

## Contact

If you have any questions or inquiries, you can reach me at [lkvharitha@gmail.com](mailto:lkvharitha@gmail.com).
