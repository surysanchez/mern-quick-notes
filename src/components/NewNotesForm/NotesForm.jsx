import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function NewNotesForm({addNote}) {
    const [newNotes, setNewNotes] = useState({
        text: ''
    })
    // function handleChange(evt){
    //     setNotes({...notes, [evt.target.name]: evt.target.value });
    // }

    // function handleSubmit(evt){
    //     evt.preventDefault();
    // }
    function handleAddNote(evt) {
        evt.preventDefault();
        addNote({
          text: evt.target.text.value,
          createdAt: Date.now(),
        })
        setNewNotes({
        text: ""
        });
      }


  return (
    <div className='form-container'>
        <form autoComplete='off' onSubmit={handleAddNote}>
            <label>Note</label>
            <input type="tex" name='text'
             value={newNotes.text} 
             onChange={(evt) => setNewNotes(evt.target.value)}
              required />
            <button type='submit'>Add Note</button>
        </form>
    </div>
  )

}