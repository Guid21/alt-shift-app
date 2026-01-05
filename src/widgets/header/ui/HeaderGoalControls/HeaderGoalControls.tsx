import { HeaderGoalProgress } from '../HeaderGoalProgress/HeaderGoalProgress';
import { HomeButton } from '../HomeButton/HomeButton';
import styles from './HeaderGoalControls.module.css';

export function HeaderGoalControls() {
  return (
    <div className={styles.goalControls}>
      <HeaderGoalProgress />
      <HomeButton />
    </div>
  );
}
