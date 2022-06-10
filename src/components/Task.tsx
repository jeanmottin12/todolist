import { Trash, Check } from 'phosphor-react';
import { TaskInterface } from './Todo';

import styles from './Task.module.css';

interface TaskProps {
  task: TaskInterface;
  onFinishTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ task, onFinishTask, onDeleteTask }: TaskProps) {
  function handleFinishTask(taskId: number) {
    onFinishTask(taskId)
  }

  return (
    <li className={styles.task}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" onChange={() => handleFinishTask(task.id)} />
        <span className={styles.checkmark}><Check /></span>
      </label>
      <p className={task.isFinished ? styles.taskFinished : ''}>{task.title}</p>
      <button onClick={() => onDeleteTask(task.id)} title='Delete Task'><Trash /></button>
    </li>
  )
}