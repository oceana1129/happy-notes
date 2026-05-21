import express from "express"
// const express = require("express")

// now we can listen to a port
const app = express();

app.get("/api/notes", (req, res) => {
    res.send("you got 5 notes");
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});