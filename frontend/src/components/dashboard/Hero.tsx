import styles from '../../styles/Hero3.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { currentUser } from '../../data/data';

const Hero = () => {

    const { FirstName } = currentUser;
    return (
        <div className={styles.container}>
            <h2><em>Develop</em> your coding <i>skills</i> for <em>little</em> or <em>nothing!</em>, {FirstName}</h2>
            <div className={styles.searchBox}>
                <FontAwesomeIcon color='purple' fontSize={18} icon={faMagnifyingGlass} />
                <input type="search" placeholder='Search lessons' />
            </div>
        </div>
    );
}

export default Hero;