import { Logo } from '@/shared/brand/logo/Logo';

import styles from './Header.module.css';

type HeaderProps = {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export function Header({ leftSlot, rightSlot }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
        {leftSlot}
      </div>

      <div className={styles.right}>{rightSlot}</div>
    </header>
  );
}
