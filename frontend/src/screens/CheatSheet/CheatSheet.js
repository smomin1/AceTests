import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/noteActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./CheatSheet.css";

const CheatSheet = () => {
  const dispatch = useDispatch();
  const [noteSizes, setNoteSizes] = useState({});

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listNotes());
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (notes) {
      // Measure and dynamically set the size of each note based on content
      const sizes = {};
      notes.forEach((note) => {
        const contentLength = note.content.length;
        // Calculate width and height based on content length
        const width = contentLength > 300 ? "span 2" : "span 1";
        const height = Math.max(200, Math.min(300, contentLength / 3 + 80)); // Adjusting height

        sizes[note._id] = { width, height };
      });
      setNoteSizes(sizes);
    }
  }, [notes]);

  return (
    <div>
      <button className="no-print" onClick={() => window.print()}>
        Print Cheat Sheet
      </button>
      {loading && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {notes && notes.length > 0 ? (
        <div className="grid-container">
          {notes.map((note) => (
            <div
              key={note._id}
              className="note-item"
              style={{
                gridColumn: noteSizes[note._id]?.width || "span 1",
                height: noteSizes[note._id]?.height + "px",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <p>{note.category}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No notes to display</p>
      )}
    </div>
  );
};

export default CheatSheet;
