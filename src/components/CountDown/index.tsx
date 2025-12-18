// ...existing code...
import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../Context/TaskContext/TaskContext';


export function CountDown() {
    const {state} = useContext(TaskContext);

    return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
// ...existing code...