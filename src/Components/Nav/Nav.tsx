import { HambergerMenu } from 'iconsax-react';
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

      <h2>"ZACZNIJMY ROLEPLAY OD NOWA"</h2>

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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='32px'
              height='32px'
              viewBox='0 0 50 50'
              fill='#FFFFFF'
            >
              <path d='M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z'></path>
            </svg>
          </div>

          <div
            className={`${styles['menu-links']} grid center`}
            ref={secondRef}
          >
            <div className={styles.link}>
              <Link to='/' onClick={MenuHandler}>
                Strona główna
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/main#idea' onClick={MenuHandler}>
                Idea projektu
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/kontakt' onClick={MenuHandler}>
                Kontakt
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/regulamin' onClick={MenuHandler}>
                Regulamin
              </Link>
            </div>
          </div>

          <div className={`${styles.socials} grid`} ref={thirdRef}>
            <a href='asd' className={`${styles.discord} flex`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={40}
                height={40}
                viewBox='0 0 50 50'
                fill='#fff'
              >
                <path d='M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z'></path>
              </svg>
            </a>
            <a href='asd' className={`${styles.youtube} flex`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={40}
                height={40}
                viewBox='0 0 50 50'
                fill='#FFFFFF'
              >
                <path d='M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z'></path>
              </svg>
            </a>
            <a href='asd' className={`${styles.twitter} flex`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={40}
                height={40}
                viewBox='0 0 50 50'
                fill='#FFFFFF'
              >
                <path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z'></path>
              </svg>
            </a>
            <a href='asd' className={`${styles.tiktok} flex`}>
              <svg
                fill='#fff'
                width={34}
                height={34}
                viewBox='0 0 512 512'
                id='icons'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z' />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
