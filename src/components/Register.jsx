import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Register() {
	const { signup } = useAuth();

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
			await signup(user.email, user.password);
			navigate('/');
		} catch (error) {
			console.log(error.code);
			if (error.code === 'auth/weak-password') {
				setError('la Contraseña debe de ser de almenos 6 caracteres');
			}
			if (error.code === 'auth/invalid-email') {
				setError('Correo no valido');
			}
			if (error.code === 'auth/email-already-in-use') {
				setError('El correo ya esta en uso Ingrese otro correo');
			}
		}
	};
	return (
		<div>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					placeholder='example@mail.com'
					onChange={hadleCahnge}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					placeholder='**********'
					onChange={hadleCahnge}
				/>
				<button>Register</button>
			</form>
		</div>
	);
}
