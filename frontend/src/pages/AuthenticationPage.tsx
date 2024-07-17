import styles from '../styles/AuthenticationPage.module.css';
import SignUpForm from '../components/form/SignUpForm';
import { GoogleIcon } from '../assets/icons/GoogleIcon';
import { FacebookIcon } from '../assets/icons/FacebookIcon';
import { DiscordIcon } from '../assets/icons/DiscordIcon';
import { GithubIcon } from '../assets/icons/GithubIcon';
import LoginForm from '../components/form/LoginForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingPage from './LoadingPage';
import ForgotPassword from '../components/modal/ForgotPassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function AuthenticationPage (){
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('Login');
    const [isForgotPassword, setIsForgotPassword] = useState(false);


    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }

    const {login, isLoading } = useContext(AuthContext);

    if(isLoading){
        return <LoadingPage />
    }

    const handlePasswordForgot = () => {
        setIsForgotPassword(!isForgotPassword);
    }

    const goHome = () => {
        navigate('/')
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={goHome} className={styles.backButton}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button title='English (UK)' className={styles.backButton}>
                    <FontAwesomeIcon icon={faGlobe} />
                </button>
            </div>
            
            <div className={styles.main}>
                <div className={styles.leftCard}>
                    <h2>CodeDator</h2>

                    <div className={styles.tablist}>
                        <TabItem title="Login" activeTab={activeTab} handleTabChange={handleTabChange} />
                        <TabItem title="SignUp" activeTab={activeTab} handleTabChange={handleTabChange} />
                    </div>
                    <>
                    {activeTab === 'Login' ? (<LoginForm login={login} handlePasswordForgot={handlePasswordForgot} />):(<SignUpForm handleTabChange={handleTabChange} />)}
                    </>
                </div>
                <div className={styles.rightCard}>
                    <h3>Continue with socials</h3>
                    
                    <div className={styles.socialList}>
                        <SocialItem title="Continue with Google" icon={<GoogleIcon />} />
                        <SocialItem title="Continue with Facebook" icon={<FacebookIcon />} />
                        <SocialItem title="Continue with Github" icon={<GithubIcon />}  />
                        <SocialItem title="Continue with Discord" icon={<DiscordIcon />} />
                    </div>
                </div>
            </div>
            {isForgotPassword && <ForgotPassword handlePasswordForgot={handlePasswordForgot} />}
           
        </div>
    );
}

export default AuthenticationPage;

interface TabItemProps {
    title: string;
    activeTab: string;
    handleTabChange: () => void;
}

const TabItem = ({title, activeTab, handleTabChange}: TabItemProps) => {
    return (
        <div
        onClick={()=> handleTabChange(title)}
        className={`${styles.tabItem} ${activeTab === title && styles.activeTab}`}>
            {title}
        </div>
    );
}

interface SocialItemProps {
    title: string;
    icon: React.ReactNode;
}

const SocialItem = ({title, icon}: SocialItemProps) => {
    return (
        <button>
            {icon}
            <p>{title}</p>
        </button>
    );
}