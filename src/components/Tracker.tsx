import styles from './Tracker.module.css'

interface TrackerProps {
    totalTasks: number;
    completedTasks: number;
}

export function Tracker({ totalTasks, completedTasks } : TrackerProps) {
    return (
        <div className={styles.trackerContainer}>
            <div className={styles.taskInfo}>
                <span className={styles.created}>Tarefas criadas</span>
                <span className={styles.counter}>{totalTasks}</span>
            </div>
            <div className={styles.taskInfo}>
                <span className={styles.concluded}>Concluídas</span>
                <span className={styles.counter}>{completedTasks} de {totalTasks}</span>
            </div>
        </div>
    )
}