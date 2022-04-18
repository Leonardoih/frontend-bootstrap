import React  from 'react';
import './Login.scss';
//import { auth } from '../firebase/firebaseconfig';

const Login = () => {
	// const [email, setEmail] = useState(null);
	// const [password, setPassword] = useState(null);

	// const loginUser = (e) => {
	// 	e.preventDefault();
	// 	auth.signInWithEmailAndPassword(email, password).then((auth) => {
	// 		console.log(auth);
	// 	});
	// };

	return (
		<div className='grid-container'>
			<div className='div-1 box'></div>
			<div className='div-2 box'>
				<form >
					<div className='mb-3'>
						<label
							htmlFor='exampleInputEmail1'
							className='form-label fs-4 fw-bold'
						>
							Email address
						</label>
						<input
							type='email'
							className='form-control '
							id='exampleInputEmail1'
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
							type='password'
							className='form-control'
							id='exampleInputPassword1'
						/>
					</div>

					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
			<div className='div-3 box'>
				<picture>
					<img
						className='img-home'
						src={require(`../../images/imagen-home-2.jpg`)}
						alt=''
					/>
					<div className='capa'> </div>
				</picture>
			</div>
			<div className='div-4 box'></div>
		</div>
	);
};

export default Login;
