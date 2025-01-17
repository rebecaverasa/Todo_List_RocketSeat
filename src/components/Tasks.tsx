import { FaTrashAlt } from 'react-icons/fa';
import styles from './Tasks.module.css';
import { Task } from '../App';
import emptyTask from '../assets/empty-task.svg';

interface TasksProps {
    tasks: Task[];
    onToggleComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Tasks({ tasks, onToggleComplete, onDelete }: TasksProps) {
    return (
        <div className={styles.tasksContainer}>
            {tasks.length === 0 ? (
                <div className={styles.emptyState}>
                    <hr className={styles.divider} />
                    <img 
                        src={emptyTask}
                        alt='Sem tarefas no momento'
                        className={styles.emptyIcon}
                    />
                    <p className={styles.emptyMessageTop}>Você ainda não tem tarefas cadastradas
                    </p>
                    <p className={styles.emptyMessageBottom}>Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            ) : (
            tasks.map((task) => (
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
            ))
        )}
        </div>
    );
}
