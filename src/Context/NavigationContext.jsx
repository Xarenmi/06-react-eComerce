import React, { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationContext = createContext()

function NavigationProvider({ children }) {
    const navigate = useNavigate()

    return (
        <NavigationContext.Provider value={navigate}>
            {children}
        </NavigationContext.Provider>
    )
}

function useNavigation() {
    const navigate = useContext(NavigationContext)
    return navigate
}

export { NavigationProvider, useNavigation }