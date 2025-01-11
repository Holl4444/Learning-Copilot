// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
  res.send('Here is the comments page');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
//  In this example, we have created a simple web server using the  Express.js framework. We have created a route that listens to the  /comments  path and sends a response with the text  Here is the comments page . 
//  To run the server, save the file and run the following command in the terminal: 
//  node comments.js
 
//  You should see the message  Server is running on port 3000  in the terminal. Open the browser and visit  http://localhost:3000/comments . You should see the text  Here is the comments page . 
//  Conclusion 
//  Creating a web server in Node.js is simple. You can use the built-in  http  module or a web framework like  Express.js. In this article, you learned how to create a web server in Node.js using the built-in  http  module and the Express.js framework. 
//  To learn more about Node.js, check out our  How to Code in Node.js series.
