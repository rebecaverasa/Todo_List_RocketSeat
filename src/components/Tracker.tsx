import styles from './Tracker.module.css'

export function Tracker() {
    return (
        <div className={styles.trackerContainer}>
            <div className={styles.taskInfo}>
                <span className={styles.created}>Tarefas criadas</span>
                <span className={styles.counter}>2</span>
            </div>
            <div className={styles.taskInfo}>
                <span className={styles.concluded}>Concluídas</span>
                <span className={styles.counter}>2 de 5</span>
            </div>
        </div>
    )
}