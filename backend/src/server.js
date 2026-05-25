import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimiter from "./middleware/ratelimiter.js";


// now we can read env files
dotenv.config();

// now we can listen to a port
const app = express();
const PORT = process.env.PORT || 5001;


// middleware
// use cors on your specific front end url
app.use(cors({
    origin: "http://localhost:5173"
}))
// app.use(cors())
app.use(express.json())
// add rate limiting, can user return requests
app.use(rateLimiter)


// example of how middleware works
app.use((req, res, next) => {
    console.log(`Request method is ${req.method} and request URL is ${req.url}`)
    next()
})

// mounts and executes middleware functions
// "/api/notes" is prefixed here
// the notes routes are under ./routes/notesRoutes.js
app.use("/api/notes", notesRoutes)
// you can make more routes here
// separate each service into its own file
// like a
// app.use("/api/products", productRoutes)
// app.use("/api/posts", productPosts)
// app.use("/api/payments", productPayment)

// once database is connected, only then listen
// why run the app if we're not connected
connectDB().then(() => {
    // start the web server and wait for incoming responses
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    });
})