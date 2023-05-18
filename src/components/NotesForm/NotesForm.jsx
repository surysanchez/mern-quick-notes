import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function CreateNotes() {
    const [notes, setNotes] = useState({
        text: '',
        createdAt: new Date()
    })
    function handleChange(evt){
        setNotes({...notes, [evt.target.name]: evt.target.value });
    }

    function handleSubmit(evt){
        evt.preventDefault();
    }
  return (
    <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="tex" name='text' value='notes.text' onChange={handleChange} required />
            <p name='createdAt' value={notes.createdAt.toLocaleString()} onChange={handleChange}></p>
            <button type='submit'>Create Note</button>
        </form>
    </div>
  )

}