

export default function NotesList({ n, index }) {
  const date = new Date(n.createdAt).toLocaleDateString();
  return (
    <div className="NotListItem">
      <div>Created on: {date}</div>
      <div>{n.text}</div>
    </div>
  );
}