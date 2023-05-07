"use client";

import { useState } from "react";
import useAuthStore from "@/store/auth";
import { INITIAL_LOGIN_DATA } from "./login/constants";
import { LoginRequest } from "@/api/requests/login.request";

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginRequest>(INITIAL_LOGIN_DATA);
  const login = useAuthStore((state) => state.login);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { email, password } = loginData;
      await login({ email, password });
      
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      alert(
        "Error al iniciar sesión. Por favor, verifica tus credenciales e intenta de nuevo."
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Nombre de usuario</label>
      <input
        id="email-input"
        type="text"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        required
      />
      <label htmlFor="password-input">Contraseña</label>
      <input
        id="password-input"
        type="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        required
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginPage;
