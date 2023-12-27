import React, { useState } from 'react';
import civil from '../Assets/col-background-civil.webp';
import crime from '../Assets/col-background-crime.webp';
import fraction from '../Assets/col-background-fractions.webp';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);

  const boxFunction = (boxName: string | null) => {
    setActiveBlock(boxName === activeBlock ? null : boxName);
  };

  return (
    <div className={styles.main}>
      <Header />
      <section className={`${styles['first-section']} center`} id='idea'>
        <p>
          Roleplay w świecie GTA 5, w naszym kraju pojawił się w 2018 roku i od
          początku robił furorę wśród graczy, rok do roku zrzeszając coraz
          większą społeczność. Wraz ze wzrostem community GTA RP, zaczęła
          zwiększać się baza serwerów oferujących coraz ciekawsze lokacje,
          przedmioty, czy skrypty… <br /> Z czasem gracze zaczęli migrować
          między serwerami w poszukiwaniu “czegoś nowego”, tracąc przy tym
          ciągłość wątków oraz konsekwencje w prowadzeniu swojej historii,
          często wpływając tym na innych graczy. W konsekwencji granie roli w
          wyimaginowanym zeszło na drugi plan na rzecz deathmatch'ów oraz
          nieustannej walki crime kontra służby. Fun z przygód naszego własnego
          “bohatera” ustąpił miejsca napince i tryhardowaniu… <br /> Gdzie się
          podział roleplay? <br /> Nasz projekt powstał po to, aby przypomnieć
          graczom, za co pokochali GTA, aby pokazać w pełni możliwości, jakie
          oferuje FiveM oraz dać Wam możliwość stworzenia własnej historii.
          <br /> Zacznijmy Roleplay na nowo!
        </p>
      </section>

      <section className={styles['pick-side']}>
        <h2>Wybierz drogę, którą chcesz podążać:</h2>
        <div className={styles['boxes']}>
          <div
            className={`${styles['left-box']} ${
              activeBlock === 'left' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('left')}
          >
            <img src={civil} alt='' width={'100%'} height={'100%'} />
            <div className={styles['text-box']}>
              <h3>
                Droga <br /> Cywilna
              </h3>
              {activeBlock === 'left' && (
                <p>
                  Chciałbyś rozpocząć nową przygodę bez zobowiązań?
                  <br /> Albo myślałeś nad założeniem własnej firmy?
                  <br /> Dobrze trafiłeś, jako serwer przede wszystkim stawiamy
                  nacisk na dobry roleplay, co za tym idzie wspieramy graczy
                  takich jak Ty!
                </p>
              )}
            </div>
            {activeBlock === 'left' && (
              <div className={styles.join}>dołącz już dziś</div>
            )}
          </div>

          <div
            className={`${styles['mid-box']} ${
              activeBlock === 'mid' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('mid')}
          >
            <img src={fraction} alt='' width={'100%'} height={'100%'} />
            <div className={styles['text-box']}>
              <h3>DROGA FRAKCYJNA</h3>
              {activeBlock === 'mid' && (
                <p>
                  Chciałbyś słuzyć z doświadczonym zespołem? <br /> Znudziło ci
                  się marudzenie na panujące zasady na innych serwerach?
                  Jesteśmy doskonałą opcją, Law Enforcement oraz Healthcare
                  System zaprojektowaliśmy tak żeby każdy znalazł coś dla
                  siebie. <br /> Więcej informacji znajdziesz na naszym Discord.
                </p>
              )}
            </div>
            {activeBlock === 'mid' && (
              <div className={styles.join}>dołącz już dziś</div>
            )}
          </div>

          <div
            className={`${styles['right-box']} ${
              activeBlock === 'right' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('right')}
          >
            <img src={crime} alt='' width={'100%'} height={'100%'} />
            <div className={styles['text-box']}>
              <h3>DROGA PRZESTĘPCZA</h3>
              {activeBlock === 'right' && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              )}
            </div>
            {activeBlock === 'right' && (
              <div className={styles.join}>dołącz już dziś</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
