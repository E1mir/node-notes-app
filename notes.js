const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const isTaken = notes.find(note => note.title === title)
    if (!isTaken) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const targetNoteIndex = notes.findIndex(note => note.title === title)

    if (targetNoteIndex !== -1) {
        notes.splice(targetNoteIndex, 1)
        saveNotes(notes)
        console.log(chalk.bgGreen(`Note "${title}" has been removed!`))
    } else {
        console.log(chalk.bgRed(`Note "${title}" not found!`))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.inverse('Your notes:'))
        notes.forEach((note, index) => {
            console.log(`${index + 1}: ${chalk.underline(note.title)}`)
        })
    } else {
        console.log(chalk.bold('You don\'t have any notes!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find(note => note.title === title)
    if (targetNote) {
        console.log(chalk.underline(targetNote.title))
        console.log(targetNote.body)
    } else {
        console.log(chalk.bgRed(`Note "${title}" not found!`))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes, null, 2)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
}
