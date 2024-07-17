import styles from '../styles/NewsPage.module.css';
import Feature1 from "../components/blog/Feature1";
import NewsList from "../components/blog/NewsList";
import Sidebar from '../components/blog/Sidebar';
import { Link } from 'react-router-dom';

function NewsPage (){
    return (
        <div>
            <div className={styles.heading}>
                <h1>News</h1>
                <p>Latest news from the Khan Academy team.</p>
                <p><Link to='/'>Home</Link> {'>'} <Link to='/news'>News</Link> </p>
            </div>
            
            <Feature1 />
            <div className={styles.main}>
                <NewsList />
                <Sidebar />
            </div>
        </div>
    );
}

export default NewsPage;