import { useState, useEffect } from 'react'
import { Note } from './Note';
import { AddNote } from './addNote';
import { NoteRestart } from './NoteRestart';

export function Notes () {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    },[])
   
    const getNotes = () => {
        fetch("http://localhost:7070/notes", {method: 'GET'})
        .then((response) => response.json())
        .then((notes) => {
        setNotes(notes)})  
    }

    const Add = (note) => {
        fetch("http://localhost:7070/notes", { method: 'POST', 
          body: JSON.stringify(note)})                 
       .then(() => getNotes())
    }

    const DeleteNote = (id) => {
        fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE'})                 
       .then(() => getNotes())
    }

    return (
        <>
        <NoteRestart getNotes={getNotes}/>
        <ul className='notes'>
            {notes.map(note => <Note key={note.id} note={note} DeleteNote={DeleteNote}/>)}
        </ul>
        <AddNote Add={Add}/>   
        </>
        
    )
}