import { useState } from 'react';
import styles from '../../styles/Main.module.css';
import ProfileCard from './ProfileCard';
import Tabs from './Tabs';
import TopicList3 from './TopicList3';

const Main = () => {
    const [activeTab, setActiveTab] = useState('Topics Covered');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }
    return (
        <div className={styles.container}>
            <ProfileCard />
            <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
            {activeTab === 'Topics Covered' ? (
                 <TopicList3 />
            ):
            (
                <div>
                    <p>Not yet available</p>
                </div>
            )}
        </div>
    );
}

export default Main;