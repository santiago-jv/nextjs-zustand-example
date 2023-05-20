import Image from "next/image";
import { FormContainerProps } from "./constants";
import styles from "./form-container.module.css";

const FormContainer = ({ children,formTitle }: FormContainerProps) => {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["image-container"]}>
        
      <img
              src="/images/main.png"
              alt="Auth Logo"
              className={styles['form-image']}
              width={100}
              height={24}
              
            />
      </section>
      <section className={styles["form-container"]}>
        <h1 className={styles["form-title"]}>{formTitle}</h1>
        {children}
      </section>
    </main>
  );
};

export default FormContainer;
