"use client";

import { useState } from "react";
import { LoginRequest } from "../../../api/requests/login.request";
import { INITIAL_LOGIN_DATA } from "./constants";
import useAuthStore from "@/store/auth";
import { toast } from "react-toastify";
import FormContainer from "@/components/auth/FormContainer";
import styles from "./login.module.css";
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
    <FormContainer formTitle="INGRESO">
      <>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <label className={styles["form-label"]} htmlFor="email-input">
            Correo electrónico
          </label>
          <input
            className={styles["form-input"]}
            id="email-input"
            name="email"
            type="text"
            value={loginData.email}
            onChange={handleOnChange}
            required
          />
          <label className={styles["form-label"]} htmlFor="password-input">
            Contraseña
          </label>
          <input
            className={styles["form-input"]}
            id="password-input"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleOnChange}
            required
          />
          <button className={styles['form-button']} type="submit">Ingresar</button>
        </form>
      </>
    </FormContainer>
  );
};

export default LoginPage;
