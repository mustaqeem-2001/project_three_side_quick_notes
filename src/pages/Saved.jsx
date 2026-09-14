export default function Saved({notes, setNotes}) {
    const savedNotes = notes.filter(note => note.isSaved === true)

    function handleRemove(id) {
        setNotes(function(prev) {
            return prev.map(function(note) {
                return note.id === id ? {...note, isSaved: false} : note
            })
        })
    }
    return (
        <main>
             { 
                savedNotes.length > 0 ?
                savedNotes.map(function(note) {
                    return <div key={note.id}>
                        <p>{note.text}</p>
                        <button onClick={() => handleRemove(note.id)}>Remove</button>                           
                    </div>
                }) 
                :
                <>
                    <p>No saved notes yet</p>
                    <p>Go to Notes and save one</p>
                </>
                
            }
        </main>
    )
}