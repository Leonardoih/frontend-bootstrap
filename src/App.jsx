import './App.css';
import { Home } from './components/Home';
import {Login} from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>
		</AuthProvider>
	);
}
export default App;
