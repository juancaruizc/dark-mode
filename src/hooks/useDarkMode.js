import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [storedValue, setStoredValue] = useLocalStorage(key, initialValue)
    return [storedValue, setStoredValue]
}