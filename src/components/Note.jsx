
export function Note({note, DeleteNote}) {
    const { id, content } = note;

    return (
        <>
            <li>
                <p>{content}</p>
                <button className='btn_delete' onClick={() => DeleteNote(id)}>X</button>
            </li>
        </>
    )
}