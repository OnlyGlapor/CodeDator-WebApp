import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/LoginForm.module.css';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface LoginFormProps {
    login: () => void;
}

const LoginForm = ({ login, handlePasswordForgot }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? '' : 'Invalid email address';
    };

    const validatePassword = (password: string) => {
        return password.length >= 6 ? '' : 'Password must be at least 6 characters';
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        setErrors({ email: emailError, password: passwordError });

        if (!emailError && !passwordError) {
            login();
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faUser} />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faLock} />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                <div className={styles.bottom}>
                    <div>
                        <input type="checkbox" name="rememberCheck" />
                        <p>Remember info</p>
                    </div>
                    <div className={styles.forgotButton} onClick={handlePasswordForgot}>
                        <p>Forget Password?</p>
                    </div>
                </div>
                <button type="submit" className={styles.loginButton}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default LoginForm;