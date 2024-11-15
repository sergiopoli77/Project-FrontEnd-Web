import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign up</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="text" // Changed from "password" to "text"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create Account</button>

          <div className="social-buttons">
            <button>Sign up with Google</button>
          </div>
        </form>

        <div className="signup-info">
          <img src="/img/signup.jpeg" alt="Local image" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
