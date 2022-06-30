const {Router}= require('express');
const { route } = require('./users');
const router = Router();

const {getNotes, createNotes, getNote, updateNotes, deleteNotes} = require('../controllers/notesController');


router.route('/')
.get(getNotes)
.post(createNotes)

router.route('/:id')
.get(getNote)
.put(updateNotes)
.delete(deleteNotes)

module.exports = router;