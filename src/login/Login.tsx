import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          <input className="login__input" type="text" placeholder="User name" />
          <input className="login__input" type="password" placeholder="Password" />
          <button className="login__submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;