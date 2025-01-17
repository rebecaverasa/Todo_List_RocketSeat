import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { Tracker } from './components/Tracker';
import './global.css';
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (taskText: string) => {
        const newTask = {
            id: uuidv4(),
            text: taskText,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleTaskComplete = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <>
            <Header />
            <NewTask onAddTask={addTask} />
            <Tracker totalTasks={totalTasks} completedTasks={completedTasks} />
            <Tasks
                tasks={tasks}
                onToggleComplete={toggleTaskComplete}
                onDelete={deleteTask}
            />
        </>
    );
}
