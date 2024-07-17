import { currentUser } from '../../data/data';
import styles from '../../styles/TopicList3.module.css';

const TopicList3 = () => {
    const { topics_covered } = currentUser;
    return(
        <div className={styles.container}>
            {topics_covered.map((item) => (
                <TopicItem 
                title={item.title}
                lessons_covered={item.lessons_covered}
                topic_completed={item.topic_completed} />
            ))}
            
        </div>
    );
}

export default TopicList3;

interface TopicItemProps {
    title: string;
    lessons_covered: number;
    topic_completed: number;
}

const TopicItem = ({title, lessons_covered, topic_completed}: TopicItemProps) => {
    return (
        <div className={styles.topicItem}>
            <h3>{title}</h3>
            <div className={styles.right}>
                <p>{lessons_covered} lessons</p>
                <span className={styles.dot} />
                <span className={styles.progressbar}>
                    <span style={{ position: 'absolute', left: 0, width: `${topic_completed}%`, height: '100%', backgroundColor: 'purple'}}></span>
                </span>
            </div>
        </div>
    );
}