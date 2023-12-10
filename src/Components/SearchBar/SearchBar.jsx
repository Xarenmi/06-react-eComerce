import { useProductContext } from '@/Context/ProductsContext'
import { useNavigation } from '@/Context/NavigationContext'
import { useScreenContext } from '@/Context/ScreenContext'
import { BsSearch } from 'react-icons/bs'
import React, { useState } from 'react'
import '@/Components/Cards/card.sass'


const SearchBar = () => {
    const { screenSize } = useScreenContext()
    const { categories } = useProductContext()
    const [search, setSearch] = useState('')
    const navigate = useNavigation()

    const additionalCategories = ['gadgets', 'women', 'men', 'home']
    const allCategories = [...categories, ...additionalCategories]

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        setSearch(event.target.elements['searchInput'].value)
        const categoryMatch = allCategories.find((category) => category.toLowerCase().replace(/-/g, ' ') === search.toLowerCase())
        if (categoryMatch) {
            navigate(`/category/${categoryMatch.replace(/ /g, '-')}`)
            return
        } else {
            navigate(`/search/${search}`)
            return
        }
    }

    return (
        <form onSubmit={handleSearchSubmit} style={{ gridColumn: screenSize <= 480 && '2 / 9fr' }}>
            <div className="top__searchContainer">
                <input
                    id='searchInput'
                    className='top__searchContainer__input'
                    type='text'
                    placeholder='Search products...'
                    aria-label="Product search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button type="submit" className="top__searchContainer__button" aria-label="Go">
                    <BsSearch />
                </button>
            </div>
        </form>
    );
};

export default SearchBar
