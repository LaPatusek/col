import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../Assets/col-background-first.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={`${styles.header} relative`}>
      <img src={background} height={'100%'} width={'100%'} alt='' />
      <h1>Zacznijmy roleplay od nowa</h1>
      <div className={styles['middle-box']}>
        <h2>
          Nasza wizja pomimo wielu niedogodności nie zmieniła się dużo od
          pierwotnej wersji serwera. <br /> Chcesz dowiedzieć się więcej? <br />{' '}
          Kliknij przycisk poniżej!
        </h2>
      </div>
      <div className={styles['link-box']}>
        <Link to={'/'}>
            Dowiedz się więcej
            <ArrowDown2 />
        </Link>
      </div>
    </div>
  );
};

export default Header;
