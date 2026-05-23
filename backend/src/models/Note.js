import mongoose from "mongoose"

// create a schema
// create a model from the schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    content: {
        type: String,
        required: true,
    }
}, 
// by default will add createAt and updatedAt fields
{timestamps: true})

const Note = mongoose.model("Note", noteSchema)

export default Note