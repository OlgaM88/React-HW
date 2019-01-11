import React from 'react';

const Notelist = ({notes, onDeleteNote}) => (
    <ul>
        {notes.map(note => <li key ={note.id}>
        {note.text}
        <button onClick ={() => onDeleteNote(note.id)}>Удалить</button>
        </li>)}
    </ul>
)
export default Notelist;