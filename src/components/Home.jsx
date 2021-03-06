import { useAuth } from '../context/AuthContext';
// import Header from './Header';
// import Navbar from './Navbar';

export function Home() {
	const { logout, user, loading } = useAuth();

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error(error.message);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<div className='home'>
				<div>
					{/* <Header></Header> */}
				</div>
				<div>
					{/* <Navbar></Navbar> */}
				</div>
				<h3>
					<p>Hola Pagina Principal!!!</p>
				</h3>
			</div>
			<div>Este es el Home</div>
			<h1>Welcome {user.email}</h1>
			<button
				className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black'
				onClick={handleLogout}
			>
				logout
			</button>
		</div>
	);
}
