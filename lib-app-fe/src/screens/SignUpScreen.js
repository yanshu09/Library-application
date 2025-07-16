import { useState } from "react";
// import { signUpUser } from "../utils/AuthUtil";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser } from "../apis/user-api";


const SignUpScreen = () => {
    const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        type: "STUDENT",
    });
    const navigate = useNavigate();
    const handleSignUpSubmit = async (e) =>{
        e.preventDefault();
        console.log(userData);
        if(validateData()){
            const user = await signUpUser(userData);
            navigate("/");
        }
    };
    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    };

    const validateData = () => {
        return userData.firstName?.length && 
        userData.lastName?.length && 
        userData.email?.length && 
        userData.password?.length;
    };

    return (
        <section className="app-section">
            <h1>SignUp</h1>
            <span>
                Already have an account? Login <Link to={"/login"}>here</Link>
            </span>
        <form className="ui form" onSubmit={handleSignUpSubmit}>
            <div className="field">
    <label>First Name</label>
    <input type="text" name="firstName" placeholder="First Name" required={true}
     onChange={handleInputChange}
     value={userData.firstName}/>
  </div>
  <div className="field">
    <label>Last Name</label>
    <input type="text" name="lastName" placeholder="Last Name" required={true}
     onChange={handleInputChange}
     value={userData.lastName}/>
  </div>
  <div className="field">
    <label>Email</label>
    <input type="email"
     name="email"
      placeholder="Email"
       value={userData.email}
        onChange={handleInputChange}
        required={true}/>
  </div>
  <div className="field">
    <label>Password</label>
    <input type="password"
     name="password" 
    placeholder="Password" 
    value={userData.password}
     onChange={handleInputChange}
     required={true}
     minLength={8}
    />
  </div>
    <div className="ui segment">
    <div className="field">
      <div className="ui toggle checkbox" onClick={() =>{
        setUserData({...userData, 
            type: userData.type==="LIBRARIAN" ? "STUDENT" : "LIBRARIAN",
            });
      }}>
        <input type="checkbox" 
        name="gift"
        tabIndex="0" 
        className="hidden"
        checked={userData.type==="LIBRARIAN"}
       />
        <label>Are you a Librarian?</label>
      </div>
    </div>
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
</section>
    );
};

export default SignUpScreen;