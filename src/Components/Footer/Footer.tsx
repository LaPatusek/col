import { Copyright } from 'iconsax-react';
import React from 'react';
import CityofLights from '../../Assets/col-logo.webp';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer} grid`}>
      <h3>
        <Copyright size={'20'} /> City of Lights 2023
      </h3>

      <img
        src={CityofLights}
        alt='City of Lights'
        height={'32px'}
        width={'32px'}
      />

      <p>
        Designed by Polski <br />
        Developed by Patusek
      </p>
    </div>
  );
};

export default Footer;
