import { TwitterIcon } from '../assets/icons/TwitterIcon';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Testimonials</h2>
            </div>

            <h1>Public Cheers for Us!</h1>
            <div className={styles.testimonialsList}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    );
}

export default Testimonials;

const ListItem = () => {
    return (
        <div className={styles.listItem}>
            <div className={styles.top}>
                <div className={styles.imgnUserInfo}>
                    <img src="" alt="" />
                    <div className={styles.userInfo}>
                        <p>Charles Yeanzah</p>
                        <p>@Yeanzah</p>
                    </div>
                </div>
                <TwitterIcon />
            </div>
            <div className={styles.userComment}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit alias neque tempora reiciendis exercitationem?</p>
            </div>
        </div>
    );
}