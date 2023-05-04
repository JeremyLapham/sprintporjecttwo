import { createContext } from 'react';

interface ContextType {
    username: string;
    setUsername: (username: string) => void;
    userData: object;
    setUserData: (userData: object) => void;
    isAdmin: any;
    setIsAdmin: (isAdmin: any) => void;
}

export const MyContext = createContext<ContextType>({
    username: '',
    setUsername: () => { },
    isAdmin: [],
    setIsAdmin: () => { },
    userData: {}, setUserData: () => {}
})