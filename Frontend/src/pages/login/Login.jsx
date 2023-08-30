import "./login.css";

const Login = () => {
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
            <input type="email" className="loginInput" placeholder="Email" />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create A New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
