import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        // put your database name right before the question mark
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch (err) {
        console.error("Error connecting to MongoDB", err)
        process.exit(1) // exit with failure
    }
}