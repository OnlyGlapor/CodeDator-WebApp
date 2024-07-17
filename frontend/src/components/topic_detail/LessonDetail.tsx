import styles from '../../styles/LessonDetail.module.css'; 
import MultipleChoiceExercise from './MultipleChoiceExercise';

const LessonDetail = () => {
    return (
        <div className={styles.container}>
            <Heading />
            <Content>
                <p>HTML stands for Hyper Text Markup Language, meaning it's not a regular programming language but a markup language. Think of it as cells being the build block of living organism. similarly HTML is the building block of web pages.</p>
                <button>Read more on the history of the Web</button>
            </Content>

            <Content>
                <video src=""></video>
            </Content>

            <Content>
                <ExerciseBox />
            </Content>
            <Transition />
        </div>
    );
}

export default LessonDetail;

const Heading = () => {
    return (
        <div>
            <h2>Introduction</h2>
        </div>
    );
}

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({children}: ContentProps) => {
    return (
        <div className={styles.content}>
           {children}
        </div>
    );
}


const ExerciseBox = () => {
    return (
        <div className={styles.exerciseBox}>
            <div className={styles.heading}>
                <h2>Exercise</h2>
                <p>1/10</p>
            </div>
            <MultipleChoiceExercise />
            <button className={styles.submitButton}>Submit</button>
        </div>
    );
}

const Transition = () => {
    return (
        <div className={styles.bottom}>
            <button>Prev</button>
            <button>Next</button>
        </div>
    );
}