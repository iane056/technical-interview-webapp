import React from "react";
import { Form, Link } from "react-router-dom";
import styles from "./SignInForm.module.css";

const SignInForm = () => {

  return (
    <div>
        <Form method="POST" className={styles.form}>
            <label className={styles.label}>Sign in</label>
            <div>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username..."
                    required
                    className={styles.input}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    required
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.button}>Sign in</button>
            <Link id="signupLink" to={"/signup"}>
                <p>Dont have an account? Sign up.</p>
            </Link>
        </Form>
    </div>
  );
}

export default SignInForm;