import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


const useDarkMode = (key, initialValue) => {
    const [dark, setDark] = useLocalStorage(key, initialValue);

    useEffect(() => {

        dark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [dark])
    
      return [dark, setDark]

}

export default useDarkMode;