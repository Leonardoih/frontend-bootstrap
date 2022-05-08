import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const { Logout, user } = useAuth();

	console.log(user);

	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await Logout();
			navigate('/login');
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
