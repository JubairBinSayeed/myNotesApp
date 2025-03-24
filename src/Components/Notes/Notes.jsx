

const Notes = () => {
    return (
        <div style={{fontFamily: "'Winky Sans', sans-serif" }}>
            <h1 className="text-5xl font-bold text-center my-10">Notes</h1>
            <h1 className="text-3xl font-bold text-yellow-500 text-center">Note Form</h1>
            <p className="text-xl font-bold ml-[700px]">Note Title:</p>     
                <div className="flex justify-center items-center">
            <input type="text" placeholder="Title..." className="input w-[500px] rounded-full" />   
                </div>
                <p className="text-xl font-bold ml-[700px]">Note Description:</p>
                <div className="flex justify-center items-center">
            <input type="text" placeholder="Describe..." className="input w-[500px] rounded-full" />   
                </div>
                <div className="flex justify-center my-5">
                    <div className="border-2 p-1 rounded-lg border-warning">
                    <button className="btn btn-warning">Done</button>
                    </div>    
                </div>
        </div>
    );
};

export default Notes;