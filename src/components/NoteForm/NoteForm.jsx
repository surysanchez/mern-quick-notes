import { useState } from "react";
import './NoteForm.css'

export default function NoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: '',
    createdAt: ''
  });
  const date = Date.now()

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote({
      text: evt.target.text.value,
      createdAt: Date.now(),
    })
    setNewNote({
      text: '',
      createdAt:''
    })
  }

  return (
    <>
      <form onSubmit={handleAddNote} className='NewNoteForm'>
        <h1>Create Note</h1>
        <input
        type='text'
        name='text'
        placeholder='type note'
        value={newNote.text}
        onChange={(evt) => setNewNote({ ...newNote, text: evt.target.value })}
        required
        ></input>
        <button type='submit'>ADD NOTE</button>
      </form>
    </>
  )
}