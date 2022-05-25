import { NavLink, Outlet } from 'react-router-dom';
 import Header from "./Header";
 import Navbar from "./Navbar";

export function Inventario() {
	return (
		<div>
			 <div><Header></Header></div>
      <div><Navbar></Navbar></div> 
			<div className='container_inv'>
				<div className='sidebar'>
					<ul className='menu_inv'>
						<li>
							<NavLink to='Laptop'>Laptop</NavLink>
						</li>
						<li>
							<NavLink to='Desktop'>Desktop</NavLink>
						</li>
						<li>
							<NavLink to='Otros'>Otros</NavLink>
						</li>
					</ul>
				</div>
				<div className='control'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
