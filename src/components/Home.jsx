import { useAuth } from '../context/AuthContext';

export const Home = () => {
	const { logout, user } = useAuth();

	console.log(user);


	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div>
			<div>Este es el Home</div>

			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
