
export function NoteRestart({getNotes}) {

    const handleGet = (e) => {
        e.preventDefault();
        getNotes();
    }


    return(
        <div className="header">
            <h2>Notes</h2>
            <button className='btn_restart' onClick={handleGet}></button>
        </div>
    )
}