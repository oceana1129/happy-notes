import express from "express"
import {getAllNotes, getNoteById, createNote, updateNote, deleteNote} from "../controllers/notesController.js"

const router = express.Router()

// these are the controller routes
router.get("/", getAllNotes)
router.get("/:id", getNoteById)
router.post("/", createNote)
// user would send a put request to update the note with id #21 for example
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;


