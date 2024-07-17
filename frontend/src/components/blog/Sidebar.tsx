import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.newIntro}>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veritatis commodi fugit neque nulla ipsam aspernatur vitae sapiente omnis animi.</p>
            </div>

            <div className={styles.searchBox}>
                <h3>Search:</h3>
                <input type="search" placeholder='Search this page'/>
            </div>
        </div>
    );
}
export default Sidebar;