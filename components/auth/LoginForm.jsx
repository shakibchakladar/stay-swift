"use client";
import { login } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/booking");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      {error && (
        <div className="text-red-600 font-bold">wrong username or password</div>
      )}
      <form onSubmit={onSubmit} className="login-form">
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
