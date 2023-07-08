import { useState } from "react"


export function AddNote ({Add}) {
    const [content, setContent] = useState('');

    const handleContent = (e) => {
        const { value } = e.target;
        setContent(value);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (content === '') return;
        const note = {id: 0, content: content};
        Add(note);
        setContent('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>New notes</p>
                <textarea rows="8" cols="40" name="content" value={content.content} onChange={handleContent}>
                </textarea>
                <button className="btn_add" type="submit"></button>
                
                
            </form>
        </>
    )
}