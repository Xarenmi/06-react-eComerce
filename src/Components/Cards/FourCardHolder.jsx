import React from 'react'
import Card from './Card'

const FourCardHolder = ({category}) => {
    let shuffled = category.slice(0);
    let selected = [];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    selected = shuffled.slice(0, 4)

  return (
    <div className='home__fourCardHolder'>
        <p>{category.name}</p>
        <Card product={selected[0]} className='home__fourCardHolder_Card'/>
        <Card product={selected[1]} className='home__fourCardHolder_Card'/>
        <Card product={selected[2]} className='home__fourCardHolder_Card'/>
        <Card product={selected[3]} className='home__fourCardHolder_Card'/>
    </div>
  )
}

export default FourCardHolder
