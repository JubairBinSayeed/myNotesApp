import { Link } from "react-router-dom";


const PinnedNotes = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">PinnedNotes</h1> 
            <p className="text-center">There aren't any notes yet! Click here to make your <br />own presonalised <Link to="/notes"  className="font-bold text-blue-500 hover:text-blue-600 hover:underline
            ">notes</Link></p>           
        </div>
    );
};

export default PinnedNotes;