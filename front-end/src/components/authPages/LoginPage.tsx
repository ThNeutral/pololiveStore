import { useState } from "react";
import hideIcon from "../../assets/AuthPage/hide.svg";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

export default function LoginPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const navigate = useNavigate();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    navigate(AppRoutes.accountRoute)
  }

  return (
    <div className="form">
      <form className="form-form" onSubmit={(e) => handleFormSubmit(e)}>
        <h3 className="form-form-header">Hi, Welcome!</h3>
        <input
          name="text"
          className="form-form-input"
          placeholder="Login"
          type="text"
        />
        <div>
          <input
            className="form-form-input"
            placeholder="Password"
            type={isPasswordHidden ? "password" : "text"}
            name="password"
          />
          <img
            className="form-form-input-icon"
            src={hideIcon}
            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
          />
          <p
            className="form-form-input-forgotPassword"
            onClick={() => navigate(AppRoutes.todoRoute)}
          >
            Forgot password?
          </p>
        </div>
        <button type="submit" className="form-form-button">
          <p className="form-form-button-text">Log in</p>
        </button>
        <p className="form=form-createAccount">
          Don`t have an account?{" "}
          <span
            className="form-form-createAccount-link"
            onClick={() => navigate(AppRoutes.registerRoute)}
          >
            Create one!
          </span>
        </p>
      </form>
    </div>
  );
}
