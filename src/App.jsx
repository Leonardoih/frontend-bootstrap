import './App.css';
import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Inventario } from './components/Inventario';
import Laptop from './components/Laptop';
import Desktop from './components/Desktop';
import Otros from './components/Otros';
import './hojas-de-estilo/index.scss';
import './hojas-de-estilo/inventario.scss';
import './hojas-de-estilo/tablas.scss';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/login' element={<Login />}></Route>

				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/inventario'
					element={
						<ProtectedRoute>
							<Inventario />
						</ProtectedRoute>
					}
				>
					<Route index element={<Laptop />}></Route>

					<Route path='laptop' element={<Laptop />}></Route>
					<Route path='desktop' element={<Desktop />}></Route>
					<Route path='otros' element={<Otros />}></Route>
				</Route>
			</Routes>
		</AuthProvider>
	);
}
export default App;
