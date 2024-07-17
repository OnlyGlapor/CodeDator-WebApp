import { DiscordIcon } from '../assets/icons/DiscordIcon';
import { GithubIcon } from '../assets/icons/GithubIcon';
import { YoutubeIcon } from '../assets/icons/YoutubeIcon';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <h2>CodeDator</h2>
            <div className={styles.right}>
                <div className={styles.menu}>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Terms of service</li>
                        <li>Donate</li>
                    </ul>
                </div>

                <div className={styles.iconList}>
                    <DiscordIcon color='#fff' />
                    <GithubIcon color='#fff' />
                    <YoutubeIcon color='#fff' />
                </div>
            </div>
        </div>
    );
}

export default Footer;