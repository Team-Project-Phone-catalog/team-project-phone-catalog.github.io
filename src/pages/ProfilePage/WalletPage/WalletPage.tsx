import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import styles from './WalletPage.module.scss';

export const WalletPage = () => {
  return (
    <div className={styles.walletPage}>
      <div className={styles.walletPage__container}>
        <div className={styles.walletPage__layout}>
          <div className={styles.walletPage__sidebar}>
            <Sidebar />
          </div>

          <main className={styles.walletPage__content}>
            <Breadcrumbs />
            <h1 className={styles.walletPage__title}>Wallet</h1>
            <p>wallet</p>
          </main>
        </div>
      </div>
    </div>
  );
};
