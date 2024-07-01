# URL Shortener Microservice

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at [FreeCodeCamp - URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

## Overview

In this project, I built a microservice that takes a long URL and shortens it. Users can input a long URL, and the service will return a shortened version that redirects to the original URL. I found this project interesting but challenging at times, especially working with the database.

## What I Learned

Through this project, I learned how to:

- Set up a Node.js and Express server.
- Create and manage routes for URL shortening and redirection.
- Use a database to store and retrieve URLs.
- Handle edge cases and errors for invalid URLs.
- Implement basic input validation.

## Endpoints

- `POST /api/shorturl`
  - Accepts a long URL and returns a shortened URL.
- `GET /api/shorturl/:short`
  - Redirects to the original long URL based on the shortened URL.


### Remarks
This project was quite interesting but a bit tricky at times, especially when dealing with the database aspects. I found some parts challenging, but I managed to get through and learned a lot about URL handling and database interaction.
