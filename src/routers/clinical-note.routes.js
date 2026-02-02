const express = require("express");
const { getAllClinicalNotes, createClinicalNote, getClinicalNoteById, updateClinicalNote, removeClinicalNoteById } = require("../controllers/clinical-note.controller");

const clinicalNoteRouter = express.Router();

clinicalNoteRouter.route("/")
                  .get(getAllClinicalNotes)
                  .post(createClinicalNote)
clinicalNoteRouter.route("/")
                  .get(getClinicalNoteById)
                  .put(updateClinicalNote)
                  .delete(removeClinicalNoteById)


module.exports = clinicalNoteRouter;