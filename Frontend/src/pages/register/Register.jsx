import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">Social Sphere</h4>
          <span className="loginDesc">
            Connecting lives and fostering global communities together
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input type="email" className="loginInput" placeholder="Email" />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password Again"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log Into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
