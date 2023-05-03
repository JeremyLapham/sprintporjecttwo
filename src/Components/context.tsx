import { createContext } from 'react';

interface ContextType {
    username: string;
    setUsername: (username: string) => void;
}

export const MyContext = createContext<ContextType>({
    username: '',
    setUsername: () => { }
})