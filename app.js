const yargs = require('yargs')
const notes = require('./notes')

yargs.command(
    'add',
    'Add a new note',
    (yargs) => {
        return yargs
            .option('title', {
                alias: 't',
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            })
            .option('body', {
                alias: 'b',
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            })
    },
    (argv) => {
        notes.addNote(argv.title, argv.body)
    }
)


yargs.command(
    'remove',
    'Remove a note',
    (yargs) => {
        return yargs.option('title', {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        })
    },
    (argv) => {
        notes.removeNote(argv.title)
    }
)


yargs.command(
    'list',
    'List your notes',
    (yargs) => yargs,
    () => {
        notes.listNotes()
    }
)

yargs.command(
    'read',
    'Read a note',
    (yargs) => {
        return yargs.option('title', {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        })
    },
    (argv) => {
        notes.readNote(argv.title)
    }
)


yargs.parse()

