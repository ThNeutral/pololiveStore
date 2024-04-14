import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hideIcon from "../../assets/AuthPage/hide.svg";

export function RegisterPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="form">
      <form className="form-form">
        <h3 className="form-form-header">Create account</h3>
        <p>Please create an account with your dealer email address.</p>
        <input
          name="text"
          className="form-form-input"
          placeholder="example@gmail.com"
          type="email"
        />
        <input
          name="text"
          className="form-form-input"
          placeholder="John Doe"
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
        </div>
        <div style={{ marginTop: "-30px" }}>
          <input
            className="form-form-input"
            placeholder="Confirm password"
            type={isConfirmPasswordHidden ? "password" : "text"}
            name="password"
          />
          <img
            className="form-form-input-icon"
            src={hideIcon}
            onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
          />
        </div>
        <button type="submit" className="form-form-button">
          <p className="form-form-button-text">Log in</p>
        </button>
      </form>
    </div>
  );
}
