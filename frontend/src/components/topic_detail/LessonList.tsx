import { useState } from 'react';
import styles from '../../styles/LessonList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const LessonList = () => {
    const [selectedLesson, setSelectedLesson] = useState('Introduction');

    const handleSelectedLesson = (lesson: string) => {
        setSelectedLesson(lesson);
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Lessons, we'll cover!</h2>
            </div>

            <div className={styles.list}>
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Introduction" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Basic" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Tags" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Element" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Attribute" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Paragraphs" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Styles" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Heading" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="meta data" />
                <ListItem selectedLesson={selectedLesson} handleSelectedLesson={handleSelectedLesson} title="Take a test" />

            </div>
        </div>
    );
}

export default LessonList;

interface ListItemProps {
    title: string;
    selectedLesson: string;
    handleSelectedLesson: () => void;
}

const ListItem = ({title, selectedLesson, handleSelectedLesson}: ListItemProps) => {
    return (
        <div
        onClick={() => handleSelectedLesson(title)}
        className={`${styles.listItem} ${selectedLesson === title && styles.activeLesson}`}>
            {title}
            {selectedLesson === title && <FontAwesomeIcon icon={faVideo} fontSize={13} />}
        </div>
    );
}