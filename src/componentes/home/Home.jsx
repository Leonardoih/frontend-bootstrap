import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='grid-container'>
			<div className='div-1 box'></div>
			<div className='div-2 box'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
			<div className='div-3 box'>
				<img
					className='img-home'
					src={require(`../../images/home.png`)}
					alt=''
				/>
			</div>
			<div className='div-4 box'></div>
		</div>
	);
};

export default Home;
