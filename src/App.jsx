import './App.css';
import React, { useState } from 'react';
import Login from './components/login/Login';
import firebaseApp from './firebase/firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './view/home/Home';
const auth = getAuth(firebaseApp);

function App() {
	const [user, setUser] = useState(null);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setUser(usuarioFirebase);
		} else {
			setUser(null);
		}
	});
	return (
		<>
			{user ? <Home/> : <Login/>}
		</>
	);
}

export default App;
