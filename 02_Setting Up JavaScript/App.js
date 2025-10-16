/*
------------------------------------------------------------
Setting Up JavaScript (Browser, Node.js, VS Code)
------------------------------------------------------------

Introduction:
To start writing and running JavaScript, you only need a few tools.
JavaScript can run in two main environments:
1. The browser
2. Node.js on your computer

------------------------------------------------------------

------------------------------------------------------------
1. Running JavaScript in the Browser
------------------------------------------------------------
Every modern browser (like Chrome, Firefox, or Edge) has a built-in JavaScript engine.

You can run JavaScript code directly inside the browser without installing anything.

There are two main ways to do it:

Method 1: Using the Developer Console
------------------------------------------------------------
1. Open your web browser.
2. Right-click anywhere on the page and select "Inspect" or press F12.
3. Go to the "Console" tab.
4. Type JavaScript code directly, for example:
   console.log("Hello from the browser!");
5. Press Enter to see the result immediately.

Method 2: Running JavaScript in an HTML file
------------------------------------------------------------
1. Create a new file and name it index.html
2. Add this code inside it:
------------------------------------------------------------
<!DOCTYPE html>
<html>
  <body>
    <h2>My First JavaScript</h2>

    <script>
      console.log("Hello from a script tag!");
      alert("Welcome to JavaScript!");
    </script>
  </body>
</html>
------------------------------------------------------------
3. Save the file.
4. Double-click it to open in your browser.
5. You will see a popup alert and a message in the browser console.

------------------------------------------------------------
2. Setting Up Node.js
------------------------------------------------------------
Node.js allows you to run JavaScript outside of the browser.
It is commonly used for backend development, automation, and full-stack apps.

Steps to Install Node.js:
------------------------------------------------------------
1. Go to https://nodejs.org
2. Download the "LTS" (Long Term Support) version for your operating system.
3. Install it using the setup wizard (keep default settings).
4. After installation, open your terminal or command prompt.
5. Type the following commands to verify:
   node -v        (shows Node.js version)
   npm -v         (shows Node Package Manager version)
If both return version numbers, Node.js is installed correctly.

Running JavaScript in Node.js:
------------------------------------------------------------
1. Create a new file and name it app.js
2. Add this code:
------------------------------------------------------------
console.log("Hello from Node.js!");
------------------------------------------------------------
3. Open a terminal in the same folder.
4. Run the file using the command:
   node app.js
5. You should see:
   Hello from Node.js!
printed in your terminal.

------------------------------------------------------------
3. Setting Up VS Code
------------------------------------------------------------
Visual Studio Code (VS Code) is a popular, free code editor by Microsoft.
It is highly recommended for writing JavaScript because it includes syntax highlighting, extensions, and debugging tools.

Steps to Set Up VS Code:
------------------------------------------------------------
1. Download VS Code from https://code.visualstudio.com
2. Install it using the setup wizard.
3. Open VS Code and create a new folder for your project.
4. Inside VS Code, create a new file called script.js
5. Add your JavaScript code, for example:
------------------------------------------------------------
console.log("JavaScript running from VS Code!");
------------------------------------------------------------
6. Save the file.
7. Open the built-in terminal in VS Code (View > Terminal).
8. Run the file using:
   node script.js
9. The output will appear directly in the terminal.

------------------------------------------------------------
Tips 
------------------------------------------------------------
- Use VS Code extensions like "Prettier" for automatic code formatting.
- Always save your file before running it.
- Use the console.log() function often to test your code and debug.

------------------------------------------------------------
Summary
------------------------------------------------------------
You can run JavaScript in three simple environments:
1. In the browser – for frontend and quick testing.
2. In Node.js – for backend and full-stack development.
3. In VS Code – for writing and organizing your projects efficiently.

Once these tools are ready, you can start coding and exploring JavaScript freely.

------------------------------------------------------------

*/
