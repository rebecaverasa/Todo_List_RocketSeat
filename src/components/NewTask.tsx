import styles from './NewTask.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

export function NewTask() {
    return (
        <div className={styles.newTaskContainer}>
            <input 
                className={styles.newTaskInput} 
                type="text" 
                placeholder="Adicione uma nova tarefa" />
            <button
                className={styles.createButton}>
                    Criar
                    <AiOutlinePlusCircle size={20} />
            </button>
        </div>
    )
}