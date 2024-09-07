document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    const note = document.createElement('div');
    note.classList.add('note');

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    note.appendChild(noteTitle);

    const noteContent = document.createElement('p');
    noteContent.textContent = content;
    note.appendChild(noteContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        note.remove();
    });
    note.appendChild(deleteButton);

    document.getElementById('notes').appendChild(note);

    document.getElementById('note-form').reset();
});
