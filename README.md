# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Movie Discovery Web Application

## Introduction

This is a movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies (Not functional YET). The application consumes data from the TMDB API to provide up-to-date movie information.

## Requirements

To meet the project requirements, the application provides the following features:

1. **User Interface:**
   - Displays the top 10 movies on the homepage.
   - Uses a grid layout to show movie posters.
   - Displays movie title and release date on each card.

2. **Movie Search:**
   - Allows users to search for movies by title.
   - Displays search results with movie posters, titles, and release dates.
   - Shows a loading indicator while fetching search results.

3. **Movie Details:**
   - Provides a detailed page for each movie when navigating to `/movies/:id`.
   - Displays movie title, release date, runtime, and overview.

4. **API Integration:**
   - Consumes the TMDB API to fetch movie data.

5. **Error Handling:**
   - Implements error handling to display meaningful error messages in case of API failures or other issues.

## Demo

You can view a live demo of the application [here](https://hng-stagetwo.netlify.app/).

## Usage
Use the search bar to search for movies by title.
Click on a movie card to view its details.
Enjoy discovering and exploring your favorite movies!

## API Integration
This project integrates with the TMDB API to fetch movie data. You can obtain your API key by following these steps:

Visit the TMDB website and create an account.
Log in to your account and go to the API section.
Create a new API application and generate an API key.
Add your API key to the .env file as described in the installation section.

## Error Handling
The application includes error handling to provide users with meaningful error messages in case of API failures or other issues. This ensures a smooth user experience even when problems occur.