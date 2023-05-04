import { createContext } from 'react';

interface ContextType {
    username: string;
    setUsername: (username: string) => void;
    isAdmin: any;
    setIsAdmin: (isAdmin: any) => void;
}

export const MyContext = createContext<ContextType>({
    username: '',
    setUsername: () => { },
    isAdmin: [],
    setIsAdmin: () => { }
})