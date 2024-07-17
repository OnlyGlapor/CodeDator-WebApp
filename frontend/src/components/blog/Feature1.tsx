import styles from '../../styles/Feature1.module.css';

const Feature1 = () => {
    return (
        <div className={styles.container}>
            <img src="https://blog.khanacademy.org/wp-content/uploads/2024/06/Screenshot-2024-06-02-at-3.24.59%E2%80%AFPM-680x290.png" alt="featuredNews" />
            <div className={styles.content}>
                <p>EDUCATION</p>
                <h1>MOE to starts WASSCE EXAMINATION on July 5th.</h1>
                <p>By Michael Todd / 05 JUNE 2024</p>
            </div>
        </div>
    );
}

export default Feature1;