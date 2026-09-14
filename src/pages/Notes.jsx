import { useState } from "react";

export default function Notes({notes, setNotes}) {
    const [userInput, setUserInput] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editingInput, setEditingInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newNote = {
            id: notes.length ? notes[notes.length - 1].id + 1 : 1, 
            text: userInput, 
            isSaved: false
        }

        setNotes(function(prevNotes) {
            return [...prevNotes, newNote]
        })

        setUserInput("");
    }


    function handleEdit(id) {
        console.log(id);
        setEditingId(id);
        setEditingInput(function() {
            const note = notes.find(note => note.id === id)
            return note.text;
        })
    }

    function handleUpdate(e) {
        e.preventDefault();
        setNotes(function(prev) {
            return prev.map(function(note) {
                if (note.id === editingId) {
                    return {
                        ...note,
                        text: editingInput
                    }
                }
                else {return note};   
            })
        })
    }

    function handleSave(id){
        setNotes(function(prev) {
            return prev.map(function(note) {
                if (note.id === id) {
                    return {
                        ...note,
                        isSaved: !note.isSaved
                    }
                }
                return note;
            })
        })
    }

    function handleDelete(id) {
        setNotes(function(prev) {
            return prev.filter(function(note) {
                return note.id != id;
            })
        })
    }
    console.log(notes);
    return (
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    <input aria-label="Add Note" id="note-input" value={userInput} onChange={(e) => setUserInput(e.target.value)}  type="text" placeholder="New note..."/>
                    <button type="submit">Add</button>
                </form>
                
            </div>

            {/* Show notes from dataSet or localStorage */}
            {
                notes.map(function(note) {
                    return <div key={note.id}>
                        <p>{note.text}</p>
                        <button onClick={() => handleEdit(note.id)}>Edit</button>
                        <button onClick={() => handleSave(note.id)} style={note.isSaved ? {backgroundColor:"green"} : {backgroundColor: "#fff"}}>Save</button>
                        
                        {/* Show editing field */}
                        {
                            editingId === note.id && 
                            <div>
                                <form onSubmit={handleUpdate}>
                                    <input type="text" value={editingInput} onChange={(e) => setEditingInput(e.target.value)}/>
                                    <button type="submit">Update</button>
                                </form>
                                <button onClick={() => setEditingId(null)} type="button">Cancel</button>
                                <button onClick={() => handleDelete(note.id)}>Delete</button>
                            </div>
                        }        
                    </div>
                })
            }
        </main>
    )
}