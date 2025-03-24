import { useState } from "react";

const Notes = () => {
    const [title, setTitle] = useState("");
    const [submittedTitle, setSubmittedTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submittedDescription, setSubmittedDescription] = useState("");
    const handleNoteForm = e => {
        e.preventDefault();
        setSubmittedTitle(title);
        setSubmittedDescription(description);
    };
    return (
        <div style={{fontFamily: "'Winky Sans', sans-serif" }}>
            <h1 className="text-5xl font-bold text-center my-10">Notes</h1>
            <h1 className="text-3xl font-bold text-yellow-500 text-center">Note Form</h1>
            <form onSubmit={handleNoteForm}>
                <p className="text-xl font-bold ml-[700px]">Note Title:</p>     
                <div className="flex justify-center items-center mb-3">
                    <input 
                        type="text" 
                        name="title"  
                        placeholder="Title..." 
                        className="input w-[500px] rounded-full" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />   
                </div>
                <p className="text-xl font-bold ml-[700px]">Note Description:</p>
                <div className="flex justify-center items-center">
                    <input 
                    type="text" 
                    name="description" 
                    placeholder="Describe..." 
                    className="input w-[500px] rounded-full" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />   
                </div>
                <div className="flex justify-center my-5">
                    <div className="border-2 p-1 rounded-lg border-warning">
                        <input className="btn btn-warning" type="submit" value="Done" />
                    </div>    
                </div>
                {submittedTitle && <p className="flex justify-center items-center">{submittedTitle}</p>}
                {submittedDescription && <p className="flex justify-center items-center">{submittedDescription}</p>}
            </form>
        </div>
    );
};

export default Notes;