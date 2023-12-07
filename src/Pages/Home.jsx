import FourCardHolder from '@/Components/Cards/FourCardHolder'
import { useProductContext } from '@/Context/ProductsContext.jsx'

const Home = () => {
  const { categories } = useProductContext()
  let shuffled = []
  let selected = [];

  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  selected = shuffled.slice(0, 4)

  return (
    <main className='home'>
      <section className='home__title'>
        <h1>HOME</h1>
        <h2>ON DEVELOPMENT</h2>
      </section>
      <section className="home__displayBox">
            <FourCardHolder category={[1,2,3,4,5]} />
            <FourCardHolder category={[1,2,3,4,5]} />
            <FourCardHolder category={[1,2,3,4,5]} />
      </section>


    </main>
  );
};

export default Home;