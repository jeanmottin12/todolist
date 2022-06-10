import styles from './NoTasks.module.css';

import clipboardImage from '../assets/clipboard.svg';

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <img src={clipboardImage} alt="Clipboard" />
      <p><strong>Você ainda não tem tarefas cadastradas</strong>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}