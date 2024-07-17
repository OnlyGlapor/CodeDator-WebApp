import { CodeIcon } from '../assets/icons/CodeIcon';
import styles from '../styles/Hero2.module.css';

const Hero2 = ({scrollToTopicsList}) => {
    return (
        <div className={styles.container}>
            <div>
                <CodeIcon />
                <h1>Start learning coding today, No excuse, You can learn anywhere at anytime!</h1>
                <p>Signup for free and get started.</p>
                <button onClick={scrollToTopicsList}>Explore More</button>
            </div>
        </div>
    );
}

export default Hero2;