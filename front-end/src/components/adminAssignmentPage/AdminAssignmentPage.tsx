import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hideIcon from "../../assets/AuthPage/hide.svg";
import AppRoutes from "../../helpers/routes";

export function AdminAssignmentPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
  const navigate = useNavigate();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    navigate(AppRoutes.accountRoute);
  }

  return (
    <div className="form">
      <form className="form-form" onSubmit={(e) => handleFormSubmit(e)}>
        <h3 className="form-form-header">Register admin</h3>
        <p style={{ width: "353px" }}>
          Please, enter the email and full name of the admin candidate with a
          password
        </p>
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
          <p className="form-form-button-text">Assign Admin</p>
        </button>
        <p
          style={{
            fontFamily: "Itim",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "25px",
            textAlign: "center",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate(AppRoutes.manageAdminRoute)}
        >
          Manage admins
        </p>
      </form>
    </div>
  );
}
