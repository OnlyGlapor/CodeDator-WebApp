import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/NavBar2.module.css';

interface NavBarProps {}

const NavBar2: React.FC<NavBarProps> = () => {
    const [activeTab, setActiveTab] = useState<string>('Home');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <h2>CodeDator<span className={styles.learn}>Learn</span></h2>

            <div className={styles.right}>
                <div className={styles.navMenu}>
                    <MenuItem title='Dashboard' to='/dashboard' activeTab={activeTab} handleTabChange={handleTabChange} />
                </div>
                {/* <button>Login</button> */}
                {/* <button>Sign up</button> */}
                <h3>Download Our App</h3> &nbsp;|
                <Link to="/profile">
                    <div className={styles.imgWrapper}>

                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar2;


interface MenuItemProps {
    title: string;
    to: string;
    handleTabChange: (tab: string) => void;
    activeTab: string;
}


const MenuItem: React.FC<MenuItemProps> = ({ title, to, handleTabChange, activeTab }) => {
    const onClick = () => handleTabChange(title);

    return (
        <NavLink 
            to={to} 
            style={{ textDecoration: 'none'}}
            className={activeTab === title ? styles.active : styles.inactive}
            onClick={onClick}
        >
            <p>{title}</p>
        </NavLink>
    );
}
