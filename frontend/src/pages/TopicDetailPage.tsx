import styles from '../styles/TopicDetailPage.module.css';
import LessonList from "../components/topic_detail/LessonList";
import LessonDetail from '../components/topic_detail/LessonDetail';
import Sidebar from '../components/topic_detail/Sidebar';

function TopicDetailPage (){
    return (
     <div className={styles.container}>
        {/* Lessons List */}
        <LessonList />
        {/* Selected Lesson */}
        <LessonDetail />
        {/* Progress Sidebar */}
        <Sidebar />
     </div>   
    );
}

export default TopicDetailPage;