import { useRef } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Testimonials from '../components/Testimonials';
import TopicsList from '../components/TopicsList';
import styles from '../styles/LandingPage.module.css';

function LandingPage() {
    const topicsListRef = useRef(null);

    const scrollToTopicsList = () => {
        topicsListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <Hero scrollToTopicsList={scrollToTopicsList} />
            <TopicsList  topicsListRef={topicsListRef} />
            <Testimonials />
            <Hero2 scrollToTopicsList={scrollToTopicsList} />
        </div>
    );
}

export default LandingPage;