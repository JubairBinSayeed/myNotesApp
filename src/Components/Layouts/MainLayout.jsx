import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar/>
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;