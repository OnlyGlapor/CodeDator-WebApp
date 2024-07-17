import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Hero.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { topics } from '../data/data';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
    scrollToTopicsList: unknown;
}

const Hero = ({scrollToTopicsList}: HeroProps) => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const handleInputChange = (value: string) => {
        setInput(value);
    }

    const goToLogin = () => {
        navigate('/auth/login')
    }
    return (
        <section className={styles.hero}>
            <h1>Learn coding for free with <br /> CodeDator.com. Yes Free!</h1>
            <p>WE are Africa's #1 code learning website developed just for you. sign up and get started!</p>

            <div className={styles.searchBox}>
                <FontAwesomeIcon color='purple' fontSize={20} icon={faMagnifyingGlass} />
                <input 
                    value={input} 
                    onChange={(e) => handleInputChange(e.target.value)} 
                    type="search" 
                    placeholder='Search lessons' />
                <button onClick={goToLogin}>Search</button>
            </div>
            <div className={styles.suggestionContainer}>
                <p>Try:</p>
                <>
                {topics.map((item) => (
                    <SuggestedItem text={item.title} handleInputChange={handleInputChange} />
                ))}
                </>
            </div>
        </section>
    );
}

export default Hero;

interface suggestedItemProps {
    text: string,
    handleInputChange: () => null;
}

const SuggestedItem = ({text, handleInputChange}: suggestedItemProps) => {
    return (
        <p onClick={() => handleInputChange(text)} className={styles.suggestionItem}>{text}</p>
    );
}