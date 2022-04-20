import React, { useState } from 'react';
import './Login.scss';
import firebaseApp from '../../firebase/firebaseconfig';
import {
	getAuth,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp);

const Login = () => {
	const firestore = getFirestore(firebaseApp);
	const [register, setRegister] = useState(false);

	const registrarUsuario = async (email, password) => {
		const infoUsuario = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		).then((usuarioFirebase) => {
			return usuarioFirebase;
		});
		console.log(infoUsuario.user.uid);
		const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
		setDoc(docuRef, {email: email});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		if (register) {
			//registrando
			registrarUsuario(email, password);
		} else {
			//login
			auth.signInWithEmailAndPassword(email, password);
		}
	};

	return (
		<div className='grid-container'>
			<>{}</>
			<div className='div-1 box'></div>
			<div className='div-2 box'>
				<form onSubmit={submitHandler}>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputEmail1'
							className='form-label fs-4 fw-bold'
						>
							Email address
						</label>
						<input
							id='email'
							type='email'
							//onChange={(e)=>{target.value}}
							className='form-control '
							aria-describedby='emailHelp'
						/>
						<div id='emailHelp' className='form-text text-light fs-6'>
							We'll never share your email with anyone else.
						</div>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputPassword1'
							className='form-label fs-4 fw-bold'
						>
							Password
						</label>
						<input
							id='password'
							type='password'
							className='form-control'
						/>
					</div>

					<input
						type='submit'
						className='btn btn-primary'
						value={register ? 'registrar' : 'Login'}
					></input>

					<label
						className='register-label'
						onClick={() => setRegister(!register)}
					>
						{register ? 'ya tengo una cuenta' : 'no tengo una cuenta'}
					</label>
				</form>
			</div>
			<div className='div-3 box'>
				<picture>
					<img
						className='img-home'
						src={require(`../../images/imagen-home-2.jpg`)}
						alt=''
					/>
				</picture>
			</div>
			<div className='div-4 box'></div>
		</div>
	);
};

export default Login;
