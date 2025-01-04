# Express.js JSON Body Parsing Issue

This repository demonstrates a bug in an Express.js application where JSON request bodies are not correctly parsed when they exceed a certain size or complexity.  The issue stems from limitations in the default JSON body parser's handling of large or deeply nested JSON data.

## Bug Description

The `bug.js` file contains an Express.js server that attempts to parse JSON request bodies using `express.json()`.  However, when a large or deeply nested JSON payload is sent to the `/users` POST endpoint, the `req.body` object remains empty.  This is unexpected, as `express.json()` should handle the parsing.

## Solution

The `bugSolution.js` file provides a solution by configuring the `express.json()` middleware with options to increase the limit on the size of JSON bodies.  This ensures that larger JSON payloads can be parsed correctly.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` to start the buggy server.
5. Send a large or complex JSON POST request to `http://localhost:3000/users`.
6. Observe that the server logs an empty `req.body`.
7. Run `node bugSolution.js` to start the server with the solution.
8. Repeat step 5.  This time, the server will log the contents of the JSON request body.
