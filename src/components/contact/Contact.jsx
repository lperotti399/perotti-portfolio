import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import social from "../../assets/social.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff63a396-5185-4ec4-a18f-c22a2a310914");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            contact me about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>business email</p>
            </div>
            <div className="contact-detail">
              <img src={social} alt="" />
              <p>linked-in profile</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>PA, United States</p>
            </div>
          </div>
        </div>
        <div>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-right"
          >
            <input
              type="hidden"
              name="access_key"
              value="ff63a396-5185-4ec4-a18f-c22a2a310914"
            ></input>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            ></input>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
