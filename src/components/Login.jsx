import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../hojas-de-estilo/Login.scss';

export function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { login } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState('');

	const handleChange = ({ target: { value, name } }) =>
		setUser({ ...user, [name]: value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className='grid-container'>
			<div className='div-1 box'></div>
			<div className='div-2 box'>
				<form onSubmit={handleSubmit}>
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
							onChange={handleChange}
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
							onChange={handleChange}
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						enviar
					</button>
					<label className='register-label'></label>
				</form>
			</div>
			<div className='div-3 box'>
				<picture>
					<img
						className='img-home'
						src={require(`../images/imagen-home-2.jpg`)}
						alt=''
					/>
				</picture>
			</div>
			<div className='div-4 box'></div>
		</div>
	);
}
