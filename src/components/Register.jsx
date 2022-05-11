import { useAuth } from '../context/AuthContext';

export function Register() {
	const { user } = useAuth();
	console.log(user);
	return <div>Register</div>;
}
