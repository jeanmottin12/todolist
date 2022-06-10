import { ChangeEvent, FormEvent, useState } from 'react';

import { NoTasks } from './NoTasks';
import { Task } from './Task';
import { TodoListHeader } from './TodoListHeader';

import styles from './Todo.module.css';
import { CreateTodo } from './CreateTodo';

export interface TaskInterface {
  id: number;
  title: string;
  isFinished: boolean
}

export function Todo() {
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskList = {
      id: Math.random(),
      title: newTask,
      isFinished: false,
    }

    setTaskList((prevState) => [
      ...prevState,
      newTaskList
    ])

    setNewTask('');
  }

  function handleToggleTask(taskId: number) {
    const newTaskList = [...taskList];
    let itemToFinish = newTaskList.find(task => task.id === taskId);

    if (itemToFinish) {
      itemToFinish.isFinished = !itemToFinish.isFinished;
    }

    setTaskList(newTaskList);
  }

  function handleDeleteTask(taskId: number) {
    const newTaskList = taskList.filter(task => task.id !== taskId);
    setTaskList(newTaskList);
  }

  const totalTasks = taskList.length;
  const finishedTasks = taskList.reduce((previousValue, currentValue) => {
    return currentValue.isFinished ? previousValue + 1 : previousValue;
  }, 0);

  return (
    <main className={styles.main}>
      <CreateTodo
        newTask={newTask}
        onAddNewTask={handleAddNewTask}
        onChangeNewTask={handleChangeNewTask}
      />

      <div className={styles.todoList}>
        <TodoListHeader
          numberOfTasks={totalTasks}
          finishedTasks={finishedTasks}
        />

        {taskList.length === 0 ? (
          <NoTasks />
        ) : (
          <ul className={styles.todoTaskList}>
            {taskList.map(task => (
              <Task
                key={task.id}
                task={task}
                onFinishTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}