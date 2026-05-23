import Note from "../models/Note.js"

// get
export async function getAllNotes (req, res) {
    try {
        // .find() will give you all the notes
        // use .find({id})
        // .sort({createdAt: -1}) would sort by newest created first
        const notes = await Note.find().sort({createdAt: -1}) 
        res.status(200).json(notes)
    }
    catch (err) {
        console.error("Error in getAllNotes controller", err)
        res.status(500).json({message: "internal server error"})
    }
}

export async function getNoteById (req, res) {
    try {
        // .find() will give you all the notes
        // use .find({id})
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    }
    catch (err) {
        console.error("Error in getAllNotes controller", err)
        res.status(500).json({message: "internal server error"})
    }
}

// post
export async function createNote (req, res) {
    try {
        const {title, content} = req.body
        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json({message:"Note created successfully!", savedNote})
    }
    catch (err) {
        console.error("Error in createNote controller", err)
        res.status(500).json({message: "internal server error"})
    }
}

// put
export async function updateNote (req, res) {
    try {
        const {title, content} = req.body
        // get the id from the url param
        console.log(req.params.id)
        const newNote = await Note.findByIdAndUpdate(
            req.params.id, {title, content}, {new: true})
        if (!newNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message:"Note updated successfully!", newNote})
    }
    catch (err) {
        console.error("Error in updateNote controller", err)
        res.status(500).json({message: "internal server error"})
    }
}

export async function deleteNote (req, res) {
    try {
        const {title, content} = req.body
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id, {title, content}
        )
        if (!deleteNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message:"Note deleted successfully!", deletedNote})
    }
    catch (err) {
        console.error("Error in deleteNote controller", err)
        res.status(500).json({message: "internal server error"})
    }
}