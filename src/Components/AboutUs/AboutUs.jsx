import { Link } from "react-router-dom";
import about from "../../assets/about-us.png";
import construction from "../../assets/web-construction.png"
const AboutUs = () => {
    return (
        <div>
            <div className="flex justify-center my-5">
            <img src={about} className=" " alt="" />
            </div>
            <p className="text-center">Our page focuses on the belief in efficient note taking.This website is free for everyone.
                <br /> to get the best user experience you can register <Link className="font-bold text-yellow-500 hover:text-yellow-600 hover:underline">here</Link>.</p>        
            <h1 className=" text-5xl font-bold text-center my-10 font-[Boldonse]">NOTE: THE WEBSITE IS UNDER <span className="text-yellow-500">CONSTRUCTION</span></h1>
            <div className="flex justify-center my-5">
                <img src={construction}   alt="" />
            </div> 
            <div className="flex justify-center my-5">
            <div className="border-2 p-1 rounded-lg border-warning">
            <Link to="/"  className="btn btn-warning font-bold">Go Back</Link>
            </div>    
            </div>
            
        </div>
    );
};

export default AboutUs;