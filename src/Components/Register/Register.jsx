import { Link } from "react-router-dom";
import register from "../../assets/register-two.png"

const Register = () => {
    return (
        <div className="flex justify-center items-center mt-32" style={{ fontFamily: "'Winky Sans', sans-serif" }}>
            <div className="  w-[500px] h-[600px] shadow-2xl rounded-2xl">
            <img src={register} className="ml-52 mt-10"  alt="" />
            <h1 className="text-center text-3xl font-bold flex justify-center ">Register Your Account</h1>
            <div className="ml-14">
            <label className="input validator w-96 my-5">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
  <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
</label><br />
<label className="input validator mb-5 w-96">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label><br />
<div className="validator-hint hidden">Enter valid email address</div>
<label className="input validator w-96 mb-5">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
  <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
</label><br />
<button className="btn  w-96 bg-yellow-500 border-yellow-500   text-2xl ">Register</button>
<p>Already have an account ? Click here to <Link to="/login" className="text-blue-500 font-bold hover:underline hover:text-blue-600">login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default Register;