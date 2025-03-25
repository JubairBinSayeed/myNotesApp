import { useState, useEffect } from "react";
import { Bold, List, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        if (!title.trim()) {
            toast.error("Title cannot be empty!");
            return;
        }
        if (!description.trim()) {
            toast.error("Description cannot be empty!");
            return;
        }
        if (editingIndex !== null) {
            const updatedNotes = [...notes];
            updatedNotes[editingIndex] = { title, description };
            setNotes(updatedNotes);
            setEditingIndex(null);
            toast.success("Note updated successfully!");
        } else {
            setNotes([...notes, { title, description }]);
            toast.success("Note added successfully!");
        }
        setTitle("");
        setDescription("");
    };

    const handleDelete = index => {
        const filteredNotes = notes.filter((_, i) => i !== index);
        setNotes(filteredNotes);
        toast.info("Note deleted successfully!");
    };

    const handleEdit = index => {
        setTitle(notes[index].title);
        setDescription(notes[index].description);
        setEditingIndex(index);
    };

    const formatText = (tag) => {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = description;
        let updatedText = textarea.value;

        if (tag === "bold") {
            updatedText += " **bold** ";
        } else if (tag === "list") {
            updatedText += "\n- Item 1\n- Item 2\n- Item 3";
        } else if (tag === "align-left") {
            updatedText += "\n[left aligned]";
        } else if (tag === "align-center") {
            updatedText += "\n[center aligned]";
        } else if (tag === "align-right") {
            updatedText += "\n[right aligned]";
        }
        setDescription(updatedText);
    };

    return (
        <div className="min-h-screen p-6 " style={{ fontFamily: "'Winky Sans', sans-serif" }}>
            <ToastContainer position="top-right" autoClose={3000} />
            <h1 className="text-5xl font-bold text-center my-10 text-gray-800">Notes</h1>
            
            <div className="shadow-2xl max-w-2xl mx-auto bg-white p-6 rounded-lg  border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">New Note</h2>
                <form onSubmit={handleNoteForm}>
                    <input 
                        type="text" 
                        placeholder="Title..." 
                        className="input input-bordered w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="flex gap-2 my-3">
                        <button type="button" className="btn btn-sm" onClick={() => formatText("list")}><List size={18} /></button>
                    </div>
                    <textarea 
                        placeholder="Description..." 
                        className="textarea textarea-bordered w-full p-3 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button className="w-full mt-4 bg-yellow-500 text-white p-3 transition  rounded-md font-bold hover:bg-yellow-600" type="submit">
                        {editingIndex !== null ? "Update Note" : "Add Note"}
                    </button>
                </form>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-6">
                {notes.map((note, index) => (
                    <div key={index} className="bg-white transition  hover:scale-110  p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
                        <h2 className="text-xl font-semibold text-gray-900">{note.title}</h2>
                        <p className="text-gray-700 mt-2 whitespace-pre-line">{note.description}</p>
                        <div className="flex justify-between mt-4">
                            <button className="btn btn-sm bg-emerald-500 transition hover:bg-emerald-600 text-white" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="btn btn-sm bg-rose-500 transition hover:bg-rose-600 text-white" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
