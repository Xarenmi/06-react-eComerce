import '@/Components/Cards/card.sass'
import React, { useState } from 'react'
import { useProductContext } from '@/Context/ProductsContext'
import { useNavigation } from '@/Context/NavigationContext'
import { BsSearch } from 'react-icons/bs'


const SearchBar = () => {
    const { categories } = useProductContext();
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
        <form onSubmit={handleSearchSubmit}>
            <label htmlFor='searchInput' className='visually-hidden'>
                Search for products
            </label>
            <div className="top__searchContainer">
                <input
                    id='search-input'
                    className='top__searchContainer__input'
                    type='text'
                    placeholder='Search products...'
                    aria-label='Search for products'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button type="submit" className="top__searchContainer__button" onClick={handleSearchSubmit}>
                    <BsSearch />
                </button>
            </div>
        </form>
    );
};

export default SearchBar
