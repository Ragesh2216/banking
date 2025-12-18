import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login () {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    userId: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    confirmPassword: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const err = {};

    if (isLogin) {
      if (!form.userId) err.userId = "User ID required";
      if (!form.password) err.password = "Password required";
    } else {
      if (!form.name) err.name = "Name required";
      if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";
      if (form.phone.length !== 10) err.phone = "Phone must be 10 digits";
      if (form.password.length < 8) err.password = "Min 8 characters";
      if (form.password !== form.confirmPassword)
        err.confirmPassword = "Passwords do not match";
      if (!form.agree) err.agree = "Accept terms";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? "Login successful" : "Account created");
      navigate("/404");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center px-3">
      <div className="w-full max-w-md bg-blue-900 text-white rounded-lg p-4 sm:p-6">
        
        <h1 className="text-lg sm:text-xl font-semibold text-center mb-2">
          {isLogin ? "Secure Login" : "Open Account"}
        </h1>
        <p className="text-xs text-gray-300 text-center mb-5">
          {isLogin
            ? "Access your account securely"
            : "Create your SecureBank account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* LOGIN */}
          {isLogin && (
            <>
              <Input
                label="User ID"
                name="userId"
                value={form.userId}
                error={errors.userId}
                onChange={handleChange}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={form.password}
                error={errors.password}
                onChange={handleChange}
              />
            </>
          )}

          {/* SIGNUP */}
          {!isLogin && (
            <>
              <Input label="Full Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
              <Input label="Email" name="email" value={form.email} error={errors.email} onChange={handleChange} />
              <Input label="Phone" name="phone" value={form.phone} error={errors.phone} onChange={handleChange} />
              <Input label="Password" type="password" name="password" value={form.password} error={errors.password} onChange={handleChange} />
              <Input label="Confirm Password" type="password" name="confirmPassword" value={form.confirmPassword} error={errors.confirmPassword} onChange={handleChange} />

              <label className="flex items-start gap-2 text-xs">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                I agree to terms & privacy policy
              </label>
              {errors.agree && (
                <p className="text-red-400 text-xs">{errors.agree}</p>
              )}
            </>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-medium transition
              ${loading
                ? "bg-blue-600 animate-pulse"
                : "bg-blue-600 hover:bg-blue-700 active:scale-95"}
            `}
          >
            {loading
              ? "Processing..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>

          {/* SWITCH */}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-xs text-blue-300 mt-2"
          >
            {isLogin
              ? "New user? Open an account"
              : "Already have an account? Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-xs mb-1">{label}</label>
      <input
        {...props}
        className={`w-full px-3 py-3 rounded-md bg-blue-800 border text-sm
          ${error ? "border-red-500" : "border-blue-700"}
        `}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
