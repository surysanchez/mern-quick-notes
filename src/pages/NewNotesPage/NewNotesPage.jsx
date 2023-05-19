import NewNotesForm from '../../components/NewNotesForm/NotesForm';


export default function NewNotesPage({notes}) {
  return (
    <div>
      <NewNotesForm />
    </div>
   
  );
}



// export default function NewNotesPage({notes}) {


//   return (
//     <>
//      {notes.map((note) => (
//          <PreviousNotes note={note} />   
//              ))}
//     <h1>New Note Page</h1>
//  
//     </>
//   );
// }