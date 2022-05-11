import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path='/register' element={<Register />} />
			</Routes>
		</AuthProvider>
	);
}
export default App;
