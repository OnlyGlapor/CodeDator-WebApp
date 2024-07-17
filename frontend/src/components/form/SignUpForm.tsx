import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/SignUpForm.module.css';
import { faAt, faCalendarDay, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

interface SignUpProps {
    handleTabChange: () => void;
}
const SignUpForm = ({handleTabChange}: SignUpProps) => {

    return(
        <div className={styles.formContainer}>
            <form action="">
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="name" placeholder='First Name' />
                </div>
                <div className={styles.formInput}>
                    {/* <FontAwesomeIcon icon={faLock} /> */}
                    <input type="name" placeholder='Surname' />
                </div>
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <input type="date" placeholder='Date of Birth' />
                </div>
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faAt} />
                    <input type="name" placeholder='Username' />
                </div>
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" placeholder='email' />
                </div>
                <div className={styles.formInput}>
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" placeholder='Password' />
                </div>
            </form>
            <div className={styles.bottom}>
                    <div>
                        <input type="checkbox" name="rememberCheck" />
                        <p>Send me latest lessons news, newsletters and deals.</p>
                    </div>
                    <div style={{cursor: 'pointer'}} onClick={()=> handleTabChange('Login')}>
                        <p>Already have an account?</p>
                    </div>
                </div>
            <button className={styles.loginButton}>
                Sign Up
            </button>
        </div>
    );
}
export default SignUpForm;