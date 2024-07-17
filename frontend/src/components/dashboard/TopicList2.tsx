import { Link } from 'react-router-dom';
import styles from '../../styles/TopicList2.module.css';
import { topics } from '../../data/data';

const TopicList2 = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>Available Topics</h3>
            </div>

            <div className={styles.list}>
                {topics.map((item) => (
                    <ListItem title={item.title} />
                ))}
            </div>
        </div>
    );
} 

export default TopicList2;

const ListItem = ({title}) => {
    return (
        <Link className={styles.itemContainer} to="/topic-detail">
            <div className={styles.imgWrapper}>

            </div>
            <div className={styles.textWrapper}>
                <div>
                    <h4>{title}</h4>
                    <h4>FREE</h4>
                </div>
                <div>
                    <p>10 lessons</p>
                    <p>5 star</p>
                </div>
            </div>
        </Link>
    );
}