import { useState } from 'react';
import styles from './NewTask.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

interface NewTaskProps {
    onAddTask: (taskText: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
    const [inputValue, setInputValue] = useState("")

    const handleAddTask = () => {
        if(inputValue.trim() === "") {
            return;
        }
        onAddTask(inputValue);
        setInputValue("");
    }

    return (
        <div className={styles.newTaskContainer}>
            <input 
                className={styles.newTaskInput} 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button
                className={styles.createButton}
                onClick={handleAddTask}
            >
                    Criar
                    <AiOutlinePlusCircle size={20} />
            </button>
        </div>
    )
}