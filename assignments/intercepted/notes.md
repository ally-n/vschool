Write an Express server to handle a GET request that returns an object (of any kind) as a response.

Write a middleware function in a separate JavaScript file that accepts the req, res, and next parameters, adds a property to the req, and allows the server to continue on with it's normal operation.

Pull that module into your main server code and set it up as middleware.

Use Postman to make the GET request and test whether your middleware did its job.

Express is middleware firing

We can write middleware to make passes for us. 

app.use()
1. optional Mount Path (endpoint)
2. callback function - receives the request, response

"next" looks for the next thing to do (middleware)