import FourCardHolder from '@/Components/Cards/FourCardHolder'
import { useProductContext } from '@/Context/ProductsContext'
import { shuffle } from '@/assets/modules/shuffle.js'

const Home = () => {

  const { categories } = useProductContext()
  const randomCategories = shuffle(categories, 6)

  return (
    <main className='home'>
      <section className='home__title'>
        <h1>HOME</h1>
        <h2>ON DEVELOPMENT</h2>
      </section>
      <section className="home__display">
        <aside className='home__display__triple'>
            <FourCardHolder category={randomCategories[0]} />
            <FourCardHolder category={randomCategories[1]} />
            <FourCardHolder category={randomCategories[2]} />
        </aside>
        <aside className='home__display__row'>

        </aside>
        <aside className='home__display__triple'>
            <FourCardHolder category={randomCategories[3]} />
            <FourCardHolder category={randomCategories[4]} />
            <FourCardHolder category={randomCategories[5]} />
        </aside>
        <aside className='home__display__row'>
          
        </aside>
      </section>


    </main>
  );
};

export default Home;