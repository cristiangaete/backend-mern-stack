const notesControl ={};

const noteModel = require('../models/Note');

notesControl.getNotes = async (req, res)=>{
    const notes = await noteModel.find();
    res.json(notes)
}

notesControl.createNotes = async (req, res)=>{
    
    //enviamos los datos desde mongo
    const { title, content, date, author} = req.body;
    const newNote = new noteModel({
        title,
        content,
        date,
        author

    });
    await newNote.save();
    res.json({message:'notes saved'})
}

notesControl.getNote = async (req, res)=>{
    
    const note = await  noteModel.findById(req.params.id)
    res.json(note)
}

notesControl.updateNotes = async (req, res)=>{
    const {title, content,author} =req.body;
    //noteModel.findByIdAndUpdate
    await noteModel.findOneAndUpdate({_id: req.params.id},{
        title,
        author,
        content
    })
    res.json({message:'Notes update'})
}

notesControl.deleteNotes = async (req, res)=>{

    await noteModel.findByIdAndDelete(req.params.id)
    res.json({message:'Notes delete'})
}

module.exports = notesControl;