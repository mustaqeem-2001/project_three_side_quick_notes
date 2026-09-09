import Header from "./component/Header.jsx";
import { useState } from "react";
import Notes from "./pages/Notes.jsx";
import Saved from "./pages/Saved.jsx";

export function App() {
    const [currentPage, setCurrentPage] = useState("notes")
    return (
        <>
            <Header userClick={setCurrentPage} currentPage={currentPage}/>
            <main>
                {
                    currentPage === "notes" ? <Notes /> : <Saved />
                }
            </main>
        </>
    )
}
