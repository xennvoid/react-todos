import {useState} from 'react'

const useTheme = () => {

    const [theme,setTheme] = useState('dark')

    function toggleTheme() {
        if(theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return {
        theme,toggleTheme
    }
}

export default useTheme;