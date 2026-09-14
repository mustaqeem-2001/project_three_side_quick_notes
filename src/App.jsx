import Header from "./component/Header.jsx";
import { useState, useEffect } from "react";
import Notes from "./pages/Notes.jsx";
import Saved from "./pages/Saved.jsx";
import notesData from "./data/notesData.js";

export function App() {
    const [currentPage, setCurrentPage] = useState("notes");
    const [notes, setNotes] = useState(() => {
        const notesStorage = localStorage.getItem("notes");
        return notesStorage ? JSON.parse(notesStorage) : notesData
    });


    useEffect(function() {
        const stringifiedNotes = JSON.stringify(notes);
        localStorage.setItem("notes", stringifiedNotes);
    }, [notes])


    return (
        <>
            <Header userClick={setCurrentPage} currentPage={currentPage} />
            {
                currentPage === "notes" ? <Notes notes={notes} setNotes={setNotes}/> : <Saved notes={notes} setNotes={setNotes}/>
            }
        </>
    )
}
