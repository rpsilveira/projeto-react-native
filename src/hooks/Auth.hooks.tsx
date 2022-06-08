import { createContext, useContext, useState } from "react";

export interface UserProps {
    email: string;
    id: number;
}

interface AuthContextProps {
    user?: UserProps;
    setUser(user?: UserProps): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserProps|undefined>();

    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

export const useAuth: () => AuthContextProps = () => {
    return useContext<AuthContextProps>(AuthContext);
}
