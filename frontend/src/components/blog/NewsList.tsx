import { useState } from 'react';
import styles from '../../styles/NewsList.module.css';
import { Link } from 'react-router-dom';

const NewsList = () => {
    const [isHover, setIsHover] = useState(false);

    const onHover = () => setIsHover(true);
    const onHoverOut = () => setIsHover(false);

    return (
        <div className={styles.container}>
            <NewsItem isHover={isHover} onHover={onHover} onHoverOut={onHoverOut}  />
            <NewsItem isHover={isHover} onHover={onHover} onHoverOut={onHoverOut} />
            <NewsItem isHover={isHover} onHover={onHover} onHoverOut={onHoverOut} />
        </div>
    );
}

export default NewsList;

interface NewsItemProps {
    isHover: boolean;
    onHover: () => void;
    onHoverOut: () => void;
}

const NewsItem = ({isHover, onHover, onHoverOut}: NewsItemProps) => {
    return (
        <Link to="/news/1" onMouseOver={onHover} onMouseOut={onHoverOut} className={styles.newsItem}>
            <div className={styles.imgWrapper}>
                {isHover && <div className={styles.imgOverlay}/>}
                <img src='https://blog.khanacademy.org/wp-content/uploads/2024/05/1024-x-637-680x290.png' alt='featured news' />
            </div>
            <div className={styles.contents}>
                <h1 style={{textDecorationLine: isHover ? 'underline' : 'none' }}>Bringing the Future of Education to Brazil with Khan Academy and Khanmigo</h1>
                <p>POSTED ON JUNE 05, 2024</p>
                <p>We're excited to share the latest news from our work in Brazil. Khan Academy is conducting our first large-scale pilot of the AI guide Khanmigo outside the U.S.   Four funders stepped up to bring …</p>
            </div>
        </Link>
    );
}