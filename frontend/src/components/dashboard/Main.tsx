import styles from '../../styles/Main.module.css';
import Hero from './Hero';
import TopicList2 from './TopicList2';

const Main = () => {
    return (
        <div className={styles.container}>
            <Hero />
            <TopicList2 />
        </div>
    );
}

export default Main;