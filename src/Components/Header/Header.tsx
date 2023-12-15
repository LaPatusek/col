import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={`${styles.header} relative`}>
      <h1>Zacznijmy roleplay od nowa</h1>
      <div className={styles['middle-box']}>
        <h2>
          Nasza wizja pomimo wielu niedogodności nie zmieniła się dużo od
          pierwotnej wersji serwera. <br /> Chcesz dowiedzieć się więcej? <br />{' '}
          Kliknij przycisk poniżej!
        </h2>
      </div>
      <div className={styles['link-box']}>
        <button
          onClick={() =>
            document
              .getElementById('idea')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Dowiedz się więcej
          <ArrowDown2 />
        </button>
      </div>
    </div>
  );
};

export default Header;
