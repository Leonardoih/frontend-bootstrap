import { auth } from '../firebase/firebaseconfig';

import { createContext, useContext } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	return context;
};

export function AuthProvider({ children }) {
	const Login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
	};

	const Logout = () => {
		signOut(auth);
	};
	return (
		<authContext.Provider value={{ Login, Logout }}>
			{children}
		</authContext.Provider>
	);
}
