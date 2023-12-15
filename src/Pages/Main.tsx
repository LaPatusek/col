import React from 'react';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <section className={`${styles['first-section']} center`} id='idea'>
        <h1>ZACZNIJMY ROLEPLAY OD NOWA</h1>
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
          iaculis vestibulum lectus. Phasellus nec tortor eu{' '}
        </p>
      </section>
    </div>
  );
};

export default Main;
