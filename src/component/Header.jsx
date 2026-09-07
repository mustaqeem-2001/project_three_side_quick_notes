export default function Header({userClick, currentPage}) {

    const fcStyle = {
        color: "#6a7282"
    }
    const fwTdStyle = {
        fontWeight: "bold", 
        textDecoration: "underline"
    }

    return (
        <header>
            <h1>Quick Notes</h1>
            <div>
                <button 
                    className="header-btn" 
                    style={currentPage === "notes" ? fwTdStyle : fcStyle} 
                    onClick={() => userClick("notes")}>Notes</button>
                <button 
                    className="header-btn" 
                    style={currentPage === "saved" ? fwTdStyle : fcStyle} 
                    onClick={() => userClick("saved")}>Saved</button>
            </div>
        </header>
    )
}