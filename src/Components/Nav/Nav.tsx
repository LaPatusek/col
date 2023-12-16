import { HambergerMenu, Youtube } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CityofLights from '../../Assets/col-logo.webp';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const iconSize = 43;

  const MenuHandler = () => {
    setMenuState((s) => !s);
  };

  useEffect(() => {
    if (menuState) {
      const menuRefCurr = menuRef.current!;
      const firstRefCurr = firstRef.current!;
      const secondRefCurr = secondRef.current!;
      const thirdRefCurr = thirdRef.current!;

      setTimeout(() => {
        menuRefCurr?.classList.toggle(styles['active-menu']);
      }, 200);

      setTimeout(() => {
        firstRefCurr?.classList.toggle(styles['visible-menu-item']);
        secondRefCurr?.classList.toggle(styles['visible-menu-item']);
        thirdRefCurr?.classList.toggle(styles['visible-menu-item']);
      }, 420);
    }
  }, [menuState]);

  return (
    <div className={`${styles.nav} grid`}>
      <div className={`${styles.logo} flex`}>
        <img src={CityofLights} alt='City of Lights' />
        <h1>City of Lights</h1>
      </div>

      <h2>ZACZNIJMY ROLEPLAY OD NOWA</h2>

      <div className={styles.hamburger} onClick={MenuHandler}>
        Menu <HambergerMenu size={'25'} />
      </div>

      {menuState && (
        <div className={styles.menu} ref={menuRef}>
          <div
            className={styles['exit-btn']}
            onClick={MenuHandler}
            ref={firstRef}
          >
            X
          </div>

          <div
            className={`${styles['menu-links']} grid center`}
            ref={secondRef}
          >
            <div className={styles.link}>
              <Link to='/'>Strona główna</Link>
            </div>

            <div className={styles.link}>
              <Link to='/'>Idea projektu</Link>
            </div>

            <div className={styles.link}>
              <Link to='/'>Oferta</Link>
            </div>

            <div className={styles.link}>
              <Link to='/kontakt'>Kontakt</Link>
            </div>

            <div className={styles.link}>
              <Link to='/'>Regulamin</Link>
            </div>
          </div>

          <div className={`${styles.socials} grid`} ref={thirdRef}>
            <a href='asd'>
              <Youtube color='#fff' size={iconSize} />
            </a>
            <a href='asd' className={styles.youtube}>
              <Youtube size={iconSize} />
            </a>
            <a href='asd'>
              <Youtube color='#fff' size={iconSize} />
            </a>
            <a href='asd'>
              <Youtube color='#fff' size={iconSize} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
