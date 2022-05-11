import '../hojas-de-estilo/Login.scss';
import { useAuth } from "../context/AuthContext";


export function Login() {


	const { user } = useAuth();
	console.log(user);


	
	return (
		<div className='grid-container'>
			<div className='div-1 box'></div>
			<div className='div-2 box'>
				<form>
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
							className='form-control'
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
