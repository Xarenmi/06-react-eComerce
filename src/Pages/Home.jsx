import React from 'react'
import FourCardHolder from '@/Components/Cards/FourCardHolder'
import { useProductContext } from '@/Context/ProductsContext'
import { shuffle } from '@/assets/modules/shuffle.js'

const Home = () => {
  const user = 'Stranger'
  const { categories, loading } = useProductContext()
  const randomCategories = shuffle(categories, 6)

  return (
    <>
      {!loading && (
        <main className='home'>
          <h1>{`Welcome back, ${user}`}</h1>
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
      )}
    </>
  );
};

export default Home;