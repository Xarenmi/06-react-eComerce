import { createContext, useState, useContext, useEffect } from 'react'

const ScreenContext = createContext()

function ScreenProvider({ children }) {
    const [screenSize, setScreenSize] = useState(() => window.innerWidth)

    const handleResize = () => {
        setScreenSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('orientationchange', handleResize)
        };
    }, []);

    const data = {
        screenSize,
        setScreenSize
    }

    return(
        <ScreenContext.Provider value={data}>
            {children}
        </ScreenContext.Provider>
    )
}

function useScreenContext() {
    const context = useContext(ScreenContext);
    if (!context) {
      throw new Error('useScreenContext must be used within a ScreenProvider');
    }
    return context
  }

  export { ScreenProvider, useScreenContext }
  export default ScreenContext
