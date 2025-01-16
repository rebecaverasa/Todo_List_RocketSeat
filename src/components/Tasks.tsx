import { FaTrashAlt } from 'react-icons/fa';
import styles from './Tasks.module.css';
import { useState } from 'react';

export function Tasks() {
    const [tasks, setTasks] = useState([
        {id: 1, text: 'Exemplo de tarefa pendente', completed: false},
        {id: 2, text: 'Exemplo de tarefa concluida', completed: true}
    ]);

    const toggleTaskComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

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
                        onClick={() => toggleTaskComplete(task.id)}
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
                    <button className={styles.deleteButton}>
                        <FaTrashAlt />
                    </button>
                </div>
            ))}
        </div>
    );
}