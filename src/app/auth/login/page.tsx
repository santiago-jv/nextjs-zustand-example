"use client";

import { useState } from "react";
import { LoginRequest } from "../../../api/requests/login.request";
import { INITIAL_LOGIN_DATA } from "./constants";
import useAuthStore from "@/store/auth";
import { toast } from "react-toastify";

export const metadata = {
  title: "About",
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginRequest>(INITIAL_LOGIN_DATA);
  const login = useAuthStore((state) => state.login);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { email, password } = loginData;
      await login({ email, password });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Nombre de usuario</label>
      <input
        id="email-input"
        name="email"
        type="text"
        value={loginData.email}
        onChange={handleOnChange}
        required
      />
      <label htmlFor="password-input">Contraseña</label>
      <input
        id="password-input"
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleOnChange}
        required
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginPage;
