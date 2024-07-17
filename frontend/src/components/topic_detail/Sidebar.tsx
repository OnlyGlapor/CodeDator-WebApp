import styles from '../../styles/SideBar2.module.css';
import WeeklyActiveHoursChart from "../dashboard/WeeklyActiveHoursChart ";
import ActiveUsers from './ActiveUsers';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <WeeklyActiveHoursChart />
            <ActiveUsers />
        </div>
    );
}

export default Sidebar;