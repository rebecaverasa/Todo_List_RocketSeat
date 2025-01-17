import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { Tracker } from './components/Tracker';
import './global.css';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (taskText: string) => {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleTaskComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <Header />
            <NewTask onAddTask={addTask} />
            <Tracker />
            <Tasks
                tasks={tasks}
                onToggleComplete={toggleTaskComplete}
                onDelete={deleteTask}
            />
        </>
    );
}
