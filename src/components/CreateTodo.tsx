import { ChangeEvent, FormEvent } from 'react';

import styles from './CreateTodo.module.css';

import plusIcon from '../assets/plus.svg';

interface CreateTodoProps {
  onAddNewTask: (event: FormEvent) => void;
  onChangeNewTask: (event: ChangeEvent<HTMLInputElement>) => void;
  newTask: string;
}

export function CreateTodo({ newTask, onAddNewTask, onChangeNewTask }: CreateTodoProps) {
  return (
    <form onSubmit={onAddNewTask} className={styles.todoCreate}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={onChangeNewTask}
        value={newTask}
      />
      <button type='submit'>
        Criar
        <img src={plusIcon} alt="Icon plus" />
      </button>
    </form>
  )
}