import { Link } from 'react-router-dom';
import { WebDevIcon } from '../assets/icons/WebDevIcon';
import { topics } from '../data/data';
import styles from '../styles/TopicsList.module.css';

interface TopicListProps {
    topicsListRef: unknown;
}

const TopicsList = ({topicsListRef}: TopicListProps) => {
    return (
        <div id='topics-list' ref={topicsListRef} className={styles.container}>
            <div className={styles.listHeader}>
                <h2>Learn something today <br /> <span className={styles.purple}>By your interest</span></h2>
                <p>We also have premium contents that goes more indepth  but don't fret we'll make sure contents stay free through your donations it can be.</p>
            </div>
            <div className={styles.topicsList}>
                {topics.map((item) => (
                    <TopicItem 
                    key={item.id}
                    title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default TopicsList;

interface TopicItemProps {
    title: string;
}

const TopicItem = ({title}: TopicItemProps) => {
    return (
        <Link to="/auth" className={styles.topicItem}>
            <div className={styles.iconWrapper}>
                <WebDevIcon />
            </div>
            <p>{title}</p>
            <p>50+ lessons</p>
        </Link>
    );
}