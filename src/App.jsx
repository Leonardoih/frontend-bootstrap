import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/register' element={<Register />}></Route>
			</Routes>
		</AuthProvider>
	);
}
export default App;
