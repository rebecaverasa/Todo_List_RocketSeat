import { FaTrashAlt } from 'react-icons/fa';
import styles from './Tasks.module.css';
import { Task } from '../App';

interface TasksProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Tasks({ tasks, onToggleComplete, onDelete }: TasksProps) {
    return (
        <div className={styles.tasksContainer}>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`${styles.task} ${
                        task.completed ? styles.completed : ''
                    }`}
                >
                    <div
                        className={styles.taskContent}
                        onClick={() => onToggleComplete(task.id)}
                    >
                        <div
                            className={
                                task.completed
                                    ? styles.iconCompleted
                                    : styles.iconPending
                            }
                        />
                        <span>{task.text}</span>
                    </div>
                    <button
                        className={styles.deleteButton}
                        onClick={() => onDelete(task.id)}
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            ))}
        </div>
    );
}
