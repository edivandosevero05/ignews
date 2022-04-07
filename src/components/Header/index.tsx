import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import { SinginButton } from '../SingInButton';
import styles from './style.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts'>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SinginButton />
      </div>
    </header>
  );
}