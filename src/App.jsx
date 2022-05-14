import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route
					path='/register'
					element={
						<ProtectedRoute>
							<Register />
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</AuthProvider>
	);
}
export default App;
