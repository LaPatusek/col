import React from 'react';
import styles from './Regulamin.module.css';

const Regulamin: React.FC = () => {
  const documentURL =
    'https://docs.google.com/document/d/e/2PACX-1vQfiS4FYZaHab93z35dU9Hqzn50CFO1DOE7Gm3k2uXGqBszZoSAPLKqlkuoLWOD6gxkMJqrsh47OOIa/pub?embedded=true';

  return (
    <div className={styles['regulamin-wrap']}>
      <h1>REGULAMIN SERWERA CITY OF LIGHTS</h1>
      <div className={styles.regulamin}>
        <iframe
          src={documentURL}
          title='Regulamin Serwera City of Lights'
        />
      </div>
    </div>
  );
};

export default Regulamin;
