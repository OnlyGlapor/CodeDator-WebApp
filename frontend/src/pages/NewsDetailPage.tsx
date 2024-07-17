import styles from '../styles/NewsDetailPage.module.css';
import Sidebar from '../components/blog/Sidebar';
import { Link } from 'react-router-dom';
import NewsContent from '../components/blog/NewsContent';

const NewsDetailPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p><Link to='/'>Home</Link> {'>'} <Link to='/news'>News</Link> {'>'} Bringing the Future of Education to Brazil with Khan Academy and Khanmigo</p>
            </div>
            <div className={styles.main}>
                <NewsContent />
                <Sidebar />
            </div>
        </div>
    );
}

export default NewsDetailPage;