import InputField, { TextField } from "../components/InputField";
import "../App.css";

const ContactMe = () => {
  return (
    <div className="contact_me_container">
      <div className="contact_me_message_header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <div className="flexed_input">
        <InputField
          label="First name"
          id="first_name"
          placeholder="Enter your first name"
          type="text"
        />
        <InputField
          label="Last name"
          id="last_name"
          placeholder="Enter your last name"
          type="text"
        />
      </div>
      <InputField
        label="Email"
        placeholder="yourname@email.com"
        type="email"
        id="email"
      />
      <TextField
        label="Message"
        placeholder="Send me a message and I'll reply you as soon as possible..."
        type="text"
        id="message"
      />
      <p>
        <input type="checkbox" />
        <span style={{ marginLeft: "10px" }}>
          You agree to providing your data to Nafisat who may contact you.
        </span>
      </p>
      <button className="contact_btn" id="btn__submit">
        <h3>Send message</h3>
      </button>
    </div>
  );
};

export default ContactMe;
