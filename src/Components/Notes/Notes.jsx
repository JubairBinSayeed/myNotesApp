import { useState, useEffect } from "react";

const Notes = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [editingIndex, setEditingIndex] = useState(null);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const handleNoteForm = e => {
        e.preventDefault();
        if (title && description) {
            if (editingIndex !== null) {
                const updatedNotes = [...notes];
                updatedNotes[editingIndex] = { title, description };
                setNotes(updatedNotes);
                setEditingIndex(null);
            } else {
                setNotes([...notes, { title, description }]);
            }
            setTitle("");
            setDescription("");
        }
    };
    const handleDelete = index => {
        const filteredNotes = notes.filter((_, i) => i !== index);
        setNotes(filteredNotes);
    };
    const handleEdit = index => {
        setTitle(notes[index].title);
        setDescription(notes[index].description);
        setEditingIndex(index);
    };
    return (
        <div style={{fontFamily: "'Winky Sans', sans-serif" }} className="min-h-screen  p-6">
            <h1 className="text-5xl font-bold text-center my-10">Notes</h1>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border-b-2 border-yellow-500">
                <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">Note Form</h1>
                <form onSubmit={handleNoteForm}>
                    <input 
                        type="text" 
                        name="title"  
                        placeholder="Note Title..." 
                        className="input w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea 
                        name="description" 
                        placeholder="Note Description..." 
                        className="input w-full p-3 mt-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />  
                    <button className="w-full mt-4 bg-yellow-500 text-white p-3 rounded-lg font-bold hover:bg-yellow-600" type="submit">
                        {editingIndex !== null ? "Update Note" : "Add Note"}
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-6">
                {notes.map((note, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
                        <h2 className="text-2xl font-bold text-gray-900">{note.title}</h2>
                        <p className="text-gray-600 mt-2">{note.description}</p>
                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
