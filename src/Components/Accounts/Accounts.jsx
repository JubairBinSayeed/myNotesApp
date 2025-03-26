import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import avatar from "../../assets/avatar.png";

const Accounts = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div>
            <div>
                <div className="flex justify-center">
                <img src={avatar} className="w-52"  alt=""/>
                </div>
                <p className="text-center"><strong>Email:</strong> {user.email}</p>
                <div class="text-center">
                    <button className="btn btn-warning text-center" onClick={logOut}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Accounts;