import { currentUser } from '../../data/data';
import styles from '../../styles/ProfileCard.module.css';

const ProfileCard = () => {

    const { FirstName, MiddleName, SurName, username, topics_covered, badges_achieved, certificate_achieved } = currentUser;

    const fullName = `${FirstName} ${MiddleName} ${SurName}`
    const totalTopicCovered = topics_covered.length;

    // Badges Achieved
    const totalBadges = badges_achieved.length;

    // Certificate Achieved
    const totalCertificate = certificate_achieved.length;

    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgWrapper}></div>
            </div>
            <div className={styles.userInfo}>
                <h3>{fullName}</h3>
                <i>@{username}</i>

                <div className={styles.learningInfo}>
                    <LearningInfoItem number={totalTopicCovered} title="n/topics" />
                    <LearningInfoItem number={totalBadges} title="n/badges" />
                    <LearningInfoItem number={totalCertificate} title="n/certificate" />
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;

interface LearningInfoItemProps {
    number: number;
    title: string;
}

const LearningInfoItem = ({number, title}: LearningInfoItemProps) => {
    return (
        <div className={styles.infoItem}>
            <p>{number}</p>
            <h3>{title}</h3>
        </div>
    );
}