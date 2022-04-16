import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/home/Home';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
