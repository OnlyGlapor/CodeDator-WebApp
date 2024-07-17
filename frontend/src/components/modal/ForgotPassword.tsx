import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/ForgotPassword.module.css';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = ({handlePasswordForgot}) => {
    return (
        <div className={styles.container}>
            <EnterEmail handlePasswordForgot={handlePasswordForgot} />
            {/* <EnterDigits /> */}
            {/* <ResetPassword /> */}
        </div>
    );
}

export default ForgotPassword;

const EnterEmail = ({handlePasswordForgot}) => {
    return (
        <div className={styles.main}>
            <h3>Forgot Password?</h3>
            <p>Enter you email to recover your password! <br /> You will recieve a 6 digit number to verify your recovery.</p>
            <div className={styles.inputWrapper}>
                <input type="text" name="text" id="" placeholder='Enter your email address' />
            </div>
            <button>Submit</button>
            <button onClick={handlePasswordForgot} className={styles.closeButton}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    );
}

const EnterDigits = () => {
    return (
        <div className={styles.main}>
            <h3>Enter Secret Digits</h3>
            <p>Enter the 6 secret digits sent to your email <br /> Didn't receive it? <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Send it again</span></p>
            <div className={styles.digitContainer}>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
            </div>
            <button>Submit</button>
            <button onClick={{}} className={styles.closeButton}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    );
}

const ResetPassword = ({}) => {
    return (
        <div className={styles.main}>
            <h3>Reset Password</h3>
            <p>Kelvin, Enter your new password to reset your password</p>
            <div className={styles.inputWrapper}>
                <input type="text" name="text" id="" placeholder='Enter New Password' />
            </div>
            <div className={styles.inputWrapper}>
                <input type="text" name="text" id="" placeholder='Confirm New Password' />
            </div>
            <button>Submit</button>
            <button onClick={{}} className={styles.closeButton}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    );
}