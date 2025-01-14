import styles from './Header.module.css';
import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Rocket logo" />
            <h1 className={styles.title}>
                <span className={styles.blue}>to</span>
                <span className={styles.purpleDark}>do</span>
            </h1>
        </header>
    )
}