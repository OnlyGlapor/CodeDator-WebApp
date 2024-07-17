import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import { NavContext } from '../context/NavContext';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    const {route, handleRoute} = useContext(NavContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/auth/login');
    }

    const handleSignin = () => {
        navigate('/auth/signup');
    }

    return (
        <div className={styles.container}>
            <h2>CodeDator</h2>
            <div className={styles.navMenu}>
                <ul>
                    <MenuItem title='Home' to="/" activeTab={route} handleTabChange={handleRoute} />
                    <MenuItem title='News' to="/news" activeTab={route} handleTabChange={handleRoute} />
                    <MenuItem title='Donate' to="/donate" activeTab={route} handleTabChange={handleRoute} />
                </ul>
            </div>
            <div className={styles.right}>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignin}>Sign up</button>
            </div>
        </div>
    );
}

export default NavBar;


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
            to={activeTab !== title && to} 
            style={{ textDecoration: 'none'}}
            className={activeTab === title ? styles.active : styles.inactive}
            onClick={onClick}
        >
            <li>{title}</li>
        </NavLink>
    );
}
