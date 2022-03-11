import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  /* For every single note object it returns
  the note object only if the doesMatchSearch
  is true, can write this w/out === true */
  const keepSearchMatches = (note) => note.doesMatchSearch === true;
  /* For every single note object that is
  true we filter it out aka keep it */
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => (
    <Note
      note={note}
      key={note.id}
      onType={props.onType}
      deleteNote={props.deleteNote}
    />
  );
  /* Then map over only the true note objects
  instead of all of the note objects */
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
