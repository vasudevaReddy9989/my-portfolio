import { useState } from "react";
import underline from '../../assets/nav_underline.svg';
import './Contact.css';

export const Contact = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });

    // Remove error when user types
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  // Validate ONLY name & email
  const validate = () => {
    let newErrors = {};

    if (!formValues.name.trim()) newErrors.name = true;
    if (!formValues.email.trim()) newErrors.email = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    const formData = {
      ...formValues,
      access_key: "462f3271-b299-42d9-999b-5697c7b27be7"
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully");

      // Clear form & validation
      setFormValues({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={underline} alt='' />
      </div>

      <div className="contact-section">
        <form onSubmit={onSubmit} className='contact-right'>

          <label>Your Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleChange}
            className={errors.name ? "error-border" : ""}
          />

          <label>Your Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            className={errors.email ? "error-border" : ""}
          />

          <label>Write your message here (optional)</label>
          <textarea
            name="message"
            rows="8"
            value={formValues.message}
            onChange={handleChange}
          />

          <button type="submit" className='contact-submit'>
            Submit now
          </button>

        </form>
      </div>
    </div>
  );
};
