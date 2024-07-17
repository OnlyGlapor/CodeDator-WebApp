import { activeUsers } from '../../data/data';
import styles from '../../styles/ActiveUsers.module.css';

const ActiveUsers = () => {
    return (
        <div className={styles.container}>
            <h3>Active Users studying w/ CodeDator</h3>

            <div className={styles.list}>
                {activeUsers.map((item) => (
                    <UserItem 
                    key={item.id}
                    username={item.username} />
                ))}
            </div>
        </div>
    );
}

export default ActiveUsers;

interface UserItemProps {
    username: string;
}

const UserItem = ({username}: UserItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imgWrapper}>
                <img src="" alt="" />
            </div>
            <div className={styles.textWrapper}>
                <h3>@{username}</h3>
                <p>@{username}</p>
            </div>
        </div>
    );
}