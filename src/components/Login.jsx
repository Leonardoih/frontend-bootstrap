import '../hojas-de-estilo/Login.scss';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
	const { signin } = useAuth();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();
	const [error, setError] = useState();

	const hadleCahnge = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signin(user.email, user.password);
			navigate('/');
		} catch (error) {
			console.log(error.code);
			if (error.code === 'auth/user-not-found') {
				setError('El Usuario No Existe');
			}
			if (error.code === 'auth/invalid-email') {
				setError('Ingrese un correo valido');
			}
			if (error.code === 'auth/wrong-password') {
				setError('Contraseña Incorrecta');
			}
		}
	};
	return (
		<div className='grid-container'>
			{error && <p>{error}</p>}
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
							name='email'
							type='email'
							onChange={hadleCahnge}
							className='form-control '
							placeholder='youremail@company.tld'
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
							name='password'
							type='password'
							onChange={hadleCahnge}
							className='form-control'
							placeholder='********'
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Iniciar Sesion
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
