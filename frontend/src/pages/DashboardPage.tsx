import styles from '../styles/DashboardPage.module.css'
import Main from "../components/dashboard/Main";
import Sidebar from "../components/topic_detail/Sidebar";

function DashboardPage(){
    return (
        <div className={styles.container}>
            {/* Main */}
            <Main />
            {/* Sidebar */}
            <Sidebar />
        </div>
    );
}

export default DashboardPage;