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
              <Link to='/' onClick={MenuHandler}>
                Strona główna
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/' onClick={MenuHandler}>
                Idea projektu
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/' onClick={MenuHandler}>
                Oferta
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/kontakt' onClick={MenuHandler}>
                Kontakt
              </Link>
            </div>

            <div className={styles.link}>
              <Link to='/' onClick={MenuHandler}>
                Regulamin
              </Link>
            </div>
          </div>

          <div className={`${styles.socials} grid`} ref={thirdRef}>
            <a href='asd' className={styles.discord}>
              <svg
                width={40}
                height={40}
                viewBox='0 -28.5 256 256'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid'
              >
                <g>
                  <path
                    d='M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z'
                    fill='#fff'
                    fill-rule='nonzero'
                  ></path>
                </g>
              </svg>
            </a>
            <a href='asd' className={styles.youtube}>
              <Youtube size={43} />
            </a>
            <a href='asd' className={styles.twitter}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                shape-rendering='geometricPrecision'
                text-rendering='geometricPrecision'
                image-rendering='optimizeQuality'
                fill-rule='evenodd'
                clip-rule='evenodd'
                viewBox='0 0 512 462.799'
                width={36}
                height={36}
              >
                <path
                  fill='#fff'
                  fill-rule='nonzero'
                  d='M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z'
                />
              </svg>
            </a>
            <a href='asd' className={styles.tiktok}>
              <svg
                fill='#fff'
                width={37}
                height={37}
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
