import styles from '../../styles/Tabs.module.css';

interface TabProps {
    activeTab: string;
    handleTabChange: () => void;
}

const Tabs = ({activeTab, handleTabChange}: TabProps) => {
    return (
        <div className={styles.container}>
            <TabItem title="Topics Covered" activeTab={activeTab} handleTabChange={handleTabChange} />
            <TabItem title="Badges Achieved" activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
    );
}

export default Tabs;

interface TabItemProps {
    title: string;
    activeTab: string;
    handleTabChange: () => void;
}

const TabItem = ({title, activeTab, handleTabChange}: TabItemProps) => {
    return (
        <div onClick={() => handleTabChange(title)} className={activeTab === title ? styles.activeTab : styles.tab}>
            <p>{title}</p>
        </div>
    );
}