import React, { useState } from 'react';
import propImg from '../Assets/col-background-first.webp';
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          venenatis luctus ipsum. Nam quis fringilla lacus, sit amet sagittis
          ligula. Vestibulum ullamcorper tortor vitae quam ullamcorper
          ultricies. Nam vel malesuada lorem. Cras nisl ligula, semper id nisl
          non, placerat tempor nulla. Maecenas eget viverra sem, vel lacinia
          lorem. Vivamus vestibulum magna ipsum, eu tincidunt turpis porta nec.
          Vestibulum quis sem et ipsum facilisis maximus fringilla sed enim. Ut
          risus urna, finibus vitae leo eget, posuere mattis elit. Aenean et
          purus rutrum, tincidunt nibh sed, accumsan lorem. Nulla vulputate
          hendrerit diam, eu semper est posuere vel. Sed leo ipsum, vehicula ac
          libero id, sagittis pellentesque ipsum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Nullam a massa dui. Sed pharetra mi non
          enim volutpat consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec dictum augue id eros efficitur, vitae interdum
          ligula faucibus. Etiam augue mauris, mattis eu fringilla vitae,
          iaculis vestibulum lectus. Phasellus nec tortor eu
        </p>
      </section>

      <section className={styles['pick-side']}>
        <h2>Wybierz drogę którą chcesz podążać:</h2>
        <div className={styles['boxes']}>
          <div
            className={`${styles['left-box']} ${
              activeBlock === 'left' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('left')}
          >
            <img src={propImg} alt='' width={'100%'} height={'100%'} />
            <div className={styles['text-box']}>
              <h3>Droga Cywilna</h3>
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
          </div>

          <div
            className={`${styles['mid-box']} ${
              activeBlock === 'mid' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('mid')}
          >
            <img src={propImg} alt='' width={'100%'} height={'100%'} />
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
          </div>

          <div
            className={`${styles['right-box']} ${
              activeBlock === 'right' ? styles['active-block'] : ''
            }`}
            onClick={() => boxFunction('right')}
          >
            <img src={propImg} alt='' width={'100%'} height={'100%'} />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
