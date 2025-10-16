/*
------------------------------------------------------------
What is JavaScript? (Client-side vs Server-side)
------------------------------------------------------------

Introduction:
JavaScript is a high-level, interpreted programming language
that allows you to make web pages interactive and dynamic.

Originally, it ran only inside web browsers (client-side).
But now, thanks to environments like Node.js, JavaScript
can also run on the server (server-side).

------------------------------------------------------------
Client-Side JavaScript
------------------------------------------------------------
Client-side JavaScript runs directly in the user's browser.

It is mainly used for:
- Updating and manipulating web page content dynamically
- Handling user interactions such as clicks and input
- Validating form data before sending it to the server
- Creating animations and visual effects
- Fetching and displaying data from APIs without reloading the page

Example HTML file:
------------------------------------------------------------
<!DOCTYPE html>
<html>
  <body>
    <h2 id="greeting">Hello!</h2>
    <button onclick="changeText()">Click Me</button>

    <script src="client.js"></script>
  </body>
</html>

------------------------------------------------------------
Example JS (client.js)
------------------------------------------------------------
*/

// This function runs in the browser when the button is clicked
function changeText() {
  // Find the element with ID "greeting" and change its text
  document.getElementById("greeting").innerText = "Welcome to JavaScript!";
}

/*
------------------------------------------------------------
Server-Side JavaScript
------------------------------------------------------------
Server-side JavaScript runs on the web server instead of the browser.

It is mainly used for:
- Building web servers and APIs
- Connecting to and interacting with databases
- Handling user authentication and server logic
- Managing requests and responses between client and server

Node.js is the most common environment for running JavaScript on servers.

Example: A simple Node.js server
------------------------------------------------------------
*/

// Import the built-in HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response back to the client
  res.end("Hello from Server-side JavaScript!");
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

/*
------------------------------------------------------------
Client-Side vs Server-Side (Key Differences)
------------------------------------------------------------

Client-Side:
- Runs in the user's browser
- Used for displaying and interacting with UI elements
- Can manipulate the DOM
- Cannot access a database directly

Server-Side:
- Runs on the web server
- Used for backend logic, data processing, and APIs
- Cannot manipulate the DOM
- Can access and manage databases

------------------------------------------------------------
Summary
------------------------------------------------------------
JavaScript can run both in the browser (client-side) and on the server (server-side).

Client-side JavaScript focuses on the user experience and interface,
while server-side JavaScript handles data, logic, and communication with databases.

Together, they make it possible to build full-stack applications using a single language.

------------------------------------------------------------
*/