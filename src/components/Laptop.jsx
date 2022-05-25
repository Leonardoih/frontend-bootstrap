import React from 'react';
import { useEffect, useState } from 'react';
import {ListadoDePortatiles} from './Interface';
import * as invService from './invService';
import '../hojas-de-estilo/Laptop.css';

const Laptop = () => {
	const [portatil, setPortatil] = useState(ListadoDePortatiles);

	const LoadPortatiles = async () => {
		const res = await invService.getItems();
		setPortatil(res.data);
	};

	useEffect(() => {
		LoadPortatiles();
	}, []);

	return (
		<div>
			{' '}
			<div>
				<button type='button' className='boton-agregar'>
					Agregar
				</button>
			</div>
			<br />
			<table>
				<thead>
					<tr>
						<th>Serial</th>
						<th>Marca</th>
						<th>Modelo</th>
						<th>Estado</th>
						<th>Usuario</th>
						<th>Analista</th>
						<th>Acciones</th>
						{/* <th>Eliminar</th> */}
					</tr>
				</thead>
				<tbody>
					{portatil.map((ListadoDePortatiles) => {
						return (
							<tr key={ListadoDePortatiles._id}>
								<td>{ListadoDePortatiles.serial}</td>
								<td>{ListadoDePortatiles.marca}</td>
								<td>{ListadoDePortatiles.modelo}</td>
								<td>{ListadoDePortatiles.estado}</td>
								<td>{ListadoDePortatiles.usuario}</td>
								<td>{ListadoDePortatiles.analista}</td>
								<td className='contenedor-td'>
									<button className='contenedor-boton boton-editar'>
										Editar
									</button>
									<button className='contenedor-boton boton-eliminar'>
										Eliminar
									</button>
								</td>
								{/* <td className='contenedor-boton'>
								</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Laptop;
