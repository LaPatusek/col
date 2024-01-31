import React from 'react';
import styles from './Kontakt.module.css';

const Kontakt: React.FC = () => {
  return (
    <div className={`${styles.kontakt} grid`}>
      <div className={`${styles['left-section']} grid center`}>
        <h1>Kontakt:</h1>
        <div className={styles.container}>
          <h3>
            Project Leader: <br /> Fruwający
          </h3>
        </div>
        <div className={styles.container}>
          <h3>
            Administrator: <br />
            Sejko
          </h3>
        </div>
        <div className={styles.container}>
          <h3>
            Developer: <br />
            M3ntosik
          </h3>
        </div>
      </div>

      <div className={`${styles['right-section']} grid center`}>
        <h4>Zacznijmy roleplay od nowa</h4>
        <p>
          Podane kontakty będą rozpoczynały konwersacje, jeśli sytuacja będzie
          tego wymagać. Jeżeli czujecie, że sytuacja nie jest na tyle pilna, aby
          kontaktować się prywatnie z danymi osobami zarządzającymi, prosimy,
          abyście utworzyli ticket na kanale{' '}
          <a
            href='https://discord.gg/YnKSvfVJH9'
            target='_blank'
            rel='noreferrer'
          >
            Discord
          </a>{' '}
          naszego projektu. <br />
          Dziękujemy za wyrozumiałość!
        </p>
      </div>
    </div>
  );
};

export default Kontakt;
