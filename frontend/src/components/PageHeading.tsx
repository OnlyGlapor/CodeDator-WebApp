import styles from '../styles/PageHeading.module.css';

const PageHeading = () => {

    const breadCrumbs = "Home > About";

    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <p>Read more about us: our vision, mission, sucess stories and everything <br /> you might love!</p>
            <p>{breadCrumbs}</p>
        </div>
    );
}

export default PageHeading;