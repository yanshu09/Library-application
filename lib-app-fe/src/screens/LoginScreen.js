import { useState } from "react";
import { loginUser } from "../utils/AuthUtil";
import { useNavigate,Link } from "react-router-dom";

const LoginScreen = () => {
    const [credentials, setCredentials] = useState({email: "",password: ""});
    const navigate = useNavigate();
    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        console.log(credentials);
        if(validateCredentials()){
            const user = await loginUser(credentials);
            navigate("/");
        }
    };
    const handleInputChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    };

    const validateCredentials = () => {
        return credentials.email?.length && credentials.password?.length;
    };

    return (
        <section className="app-section">
            <h1>Login</h1>
            <span>
                Do not have an account? SignUp <Link to={"/signup"}>here</Link>
            </span>
        <form className="ui form" onSubmit={handleLoginSubmit}>
  <div className="field">
    <label>Email</label>
    <input type="email"
     name="email"
      placeholder="Email"
       value={credentials.email}
        onChange={handleInputChange}
        required={true}/>
  </div>
  <div className="field">
    <label>Password</label>
    <input type="password"
     name="password" 
    placeholder="Password" 
    value={credentials.password}
     onChange={handleInputChange}
     required={true}
     minLength={8}
    />
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
</section>
    );
};

export default LoginScreen;