import React from 'react'
import Greeting from '../Greeting/greeting';
import ItemListContainer from '../ItemListContainer/itemlistcontainer';
import styles from './home.module.scss'
const Home = () => {
  const greeting = [
      
      <p>En las manos del artesano está el alma y la escencia de lo simple y lo bello</p>
  ];
  return (
      <>
          <section className={styles.section_home}>
              <Greeting greeting={greeting} />
          </section>
          <section className={styles.section_products}>
              <h2>Catálogo</h2>
              <ItemListContainer />
          </section>
      </>
  );
};

export default Home;