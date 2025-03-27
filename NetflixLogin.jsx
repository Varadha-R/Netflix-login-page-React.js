import React,{useState} from "react";
import "./NetflixCss.css"
export default function NetflixLogin(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
     const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Email - ${email} \n Password - ${password} \n Welcome to Netflix`);
    }
    return(
        <>
        <div className="container">
            <div className="overlay">
                <div className="Form-control">
                    <h1 className="heading">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <input type="text" 
                    value={email}
                    placeholder="Email or Mobile number"
                    onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    <div className="form-group">
                        <input type="password"
                        value={password} 
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button  type="submit"className="login">Sign In</button>
                    <p className="OR">OR</p>
                    <button className="Sign">Use a sign-in code</button>
                    <div className="Forget">
                    <a>Forget Password ?</a>
                    </div>
                    <div className="option">
                    <input type="checkbox"/>
                        <label htmlFor="Remember me">Remember Me</label>
                    </div>
                    </form>
                    <div className="signup">
                        <p>New to netflix ? <a href="#" id="Signnow">Sign up Now</a></p>
                    </div>
                    <div className="footer">
                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <a href="#">Learn more</a>
                    </small>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}