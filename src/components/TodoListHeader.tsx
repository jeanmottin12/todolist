import styles from './TodoListHeader.module.css';

interface TodoListHeaderProps {
  numberOfTasks: number;
  finishedTasks: number;
}

export function TodoListHeader({ numberOfTasks, finishedTasks }: TodoListHeaderProps) {
  return (
    <header>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span className={styles.labelTasks}>{numberOfTasks}</span>
      </div>
      <div className={styles.finishedTasks}>
        <strong>Concluídas</strong>
        <span className={styles.labelTasks}>{finishedTasks} de {numberOfTasks}</span>
      </div>
    </header>
  )
}