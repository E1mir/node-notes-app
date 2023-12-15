# Node.js Notes App

A simple command-line notes application using Node.js and Yargs.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/E1mir/node-notes-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node-notes-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### Add a Note

Add a new note by providing a title and body.

```bash
node app.js add --title "Note Title" --body "Note Body"
```

### Remove a Note

Remove a note by specifying its title.

```bash
node app.js remove --title "Note Title"
```

### List Notes

List all existing notes.

```bash
node app.js list
```

### Read a Note

Read the contents of a specific note by providing its title.

```bash
node app.js read --title "Note Title"
```

## Commands

- **add**: Add a new note.
- **remove**: Remove a note.
- **list**: List all notes.
- **read**: Read the contents of a note.

## Options

- **--title (-t)**: Specify the title of the note.
- **--body (-b)**: Specify the body of the note.

## Examples

- Add a new note:

    ```bash
    node app.js add --title "Shopping List" --body "Buy milk and eggs."
    ```

- Remove a note:

    ```bash
    node app.js remove --title "Shopping List"
    ```

- List all notes:

    ```bash
    node app.js list
    ```

- Read a note:

    ```bash
    node app.js read --title "Shopping List"
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
