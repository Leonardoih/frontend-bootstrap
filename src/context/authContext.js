import {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context)
		throw new Error('useAuth must be used within an AuthProvider');
	return context;
};
const logout = () => signOut(auth);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const signin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	return (
		<authContext.Provider
			value={{ signup, logout, signin, user, loading }}
		>
			{children}
		</authContext.Provider>
	);
}
