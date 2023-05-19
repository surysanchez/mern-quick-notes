import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import PreviousNotes from '../PreviousNotes/PreviousNotes';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [notes, setNotes] = useState([{
  //   desccription: '',
  //   createdAt: new Date
  // }])
  const [showNotes, setShowNotes] = useState(true)

  function addNote(note) {
    setNotes([...notes, note])
  }
  const [notes, setNotes] = useState([])
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route>
              <Route path="/notes/new" element=
              {<NewNotesPage  addNote={addNote} />} />
              </Route>
              <Route>
              <Route path="/notes/new" element=
             {<PreviousNotes  notes={notes}/>} />
             </Route>
             <h1>Notes</h1>
            { showNotes && <PreviousNotes user={user} notes={notes} /> }
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}



// <main className="App">
//       { user ?
//           <>
//             <NavBar user={user} setUser={setUser} />
//             <Routes>
              
//               <Route path="/notes/new" element={<NewNotesPage   notes={notes}/>} />
//               <Route path="/notes" element={<PreviousNotes  notes={notes}/>} />
//             </Routes>
//           </>
//           :
//           <AuthPage setUser={setUser} />
//       }
//     </main>