import { useNavigate } from "react-router-dom";
import AppRoutes from "../../helpers/routes";

export function PaymentInformationPage() {
  const navigate = useNavigate();

  return (
    <div className="paymentForm">
      <p className="paymentForm-information">
        <span className="paymentForm-information-header">Billing address</span>
        <br />* Please provide your information using alphanumeric characters,
        “-” (Hyphen), “,” (Comma), and/or “.” (Period).
        <br />* Name: You must write down the full name of the recipient.
        (Nicknames or honorifics are not allowed.) <br />
        * Address: Please write down your address in English.
        <br />
        <br />
        We may contact you for confirmation if the information you have provided
        is faulty or contains invalid characters.
      </p>
      <form className="paymentForm-form">
        <input
          type="text"
          className="paymentForm-form-bigInput"
          placeholder="Country/Region"
        />
        <div className="paymentForm-form-inputBlock">
          <input
            type="text"
            className="paymentForm-form-inputBlock-smallInput"
            placeholder="First Name"
          />
          <input
            type="text"
            className="paymentForm-form-inputBlock-smallInput"
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          className="paymentForm-form-bigInput"
          placeholder="Company name (Optional)"
        />
        <input
          type="text"
          className="paymentForm-form-bigInput"
          placeholder="Address"
        />
        <input
          type="text"
          className="paymentForm-form-bigInput"
          placeholder="Apartment, suite, etc. (Optional)"
        />
        <div className="paymentForm-form-inputBlock">
          <input
            type="text"
            className="paymentForm-form-inputBlock-smallInput"
            placeholder="Postal code"
          />
          <input
            type="text"
            className="paymentForm-form-inputBlock-smallInput"
            placeholder="City/Town"
          />
        </div>
        <input
          type="text"
          className="paymentForm-form-bigInput"
          placeholder="Phone number"
        />
        <div className="paymentForm-form-buttons">
          <p
            className="paymentForm-form-buttons-return"
            onClick={() => navigate(AppRoutes.cartRoute)}
          >
            &lt; Return to cart
          </p>
          <button
            className="paymentForm-form-buttons-button"
            onClick={() => navigate(AppRoutes.paymentRoute)}
          >
            Continue to payment
          </button>
        </div>
      </form>
    </div>
  );
}
