import Navbar from "../Navbar/Navbar";
import wave from "../../assets/wave.svg"
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className="font-[Boldonse]">
            <h1 className="text-5xl text-center mt-56">Welcome To MyNoteApp!</h1>
            <div className="flex justify-center my-10 gap-5">
            <Button text="Explore" href="/aboutUs"/>            
            <Button text="Start Typing" href="/notes"/>
            </div>            
            <div className="absolute bottom-0 w-full">
            <img src={wave} className="w-full"  alt="" />
            </div>
        </div>
    );
};

export default Banner;