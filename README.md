# JWT-Authentication
To implement JWT authentication for Signup and Login routes using Node, Express, Mongoose, Javascript   
1. Signup Route an Email can be registered only once.
2. Login Route generates a JWT token. Rate limiter, hashing using bcrypt and salting round of 10 to secure the website is implemented.
3. Logout Route expires the token and access will be forbidden post logout.
