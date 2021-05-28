import Head from 'next/head'
import BestDishes from '../components/molecule/BestDishes'
import PopularDishes from '../components/molecule/PopularDishes/'
import Service from '../components/molecule/Services';
import SliderAccueil from '../components/molecule/SliderAccueil';
import CardNewlatest from '../components/newlatestNews';
import Diapo from '../components/diapo';
import Footer from '../components/MyFooter';
import MenuPizza from '../components/menuPizza';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>CrocPiz</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">

        <SliderAccueil />
        <BestDishes />
        <div className="container">
          <PopularDishes />
          <Service />
          <MenuPizza/>
        </div>
        <Diapo/>
        <CardNewlatest/>
      </main>
      <Footer/>

    </div>
  )
}
