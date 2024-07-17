import { useState, useEffect } from 'react';
import styles from '../styles/LoadingPage.module.css';

export default function LoadingPage() {
  const [funFact, setFunFact] = useState('');

  useEffect(() => {
    const funFacts = [
      'Coding will soon be as important as reading',
      'The first computer virus was created in 1983',
      'The first computer game was created in 1962',
      'The first website went live in 1991',
      'Google was originally called "Backrub"',
      'Coding Bugs were NOT named after an actual bug.',
      'Coding has over 700 languages.',
      'The first programmer was the daughter of a mad poet',
      'There is BIG money in coding',
      'Coding can “power up” your brain'
    ];

    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFunFact(funFacts[randomIndex]);
  }, []);

  return (
    <div className={styles.container}>
      <LoadingSpinner />
      <div className={styles.factsWrapper}>
        <p>FunFacts</p>
        <p>Did you know: {funFact}</p>
      </div>
    </div>
  );
}

const LoadingSpinner = () => (
  <div className={styles.loadingSpinner}>
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);