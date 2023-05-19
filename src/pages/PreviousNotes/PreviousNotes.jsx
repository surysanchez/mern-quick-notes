import NotesList from "../../components/NotesList/NotesList";


export default function PreviousNotes({ notes }) {
  let noteItem;
  if (notes.length > 0) {
      noteItem = notes.map((n, idx) => (
      <NotesList n={n} key={idx} />
      ));
    } else noteItem  = <h1>No Notes Yet</h1>

  return (
    <>
      <div className="PreviousNotes">{NotesList}</div>
    </>
  )
}