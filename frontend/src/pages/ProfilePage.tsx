import styles from '../styles/ProfilePage.module.css'
import Sidebar from '../components/topic_detail/Sidebar';
import Main from '../components/profile/Main';

function ProfilePage(){
    return (
        <div className={styles.container}>
            {/* Main */}
            <Main />
            {/* Sidebar */}
            <Sidebar />
        </div>
    );
}

export default ProfilePage;