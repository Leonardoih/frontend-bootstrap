//import { ListLaptop } from "./Interface";
import axios from 'axios';

export const getItemsLaptop = async () => {
	return await axios.get('http://localhost:4000/inventario/laptop');
};
export const getItemsDesktop = async () => {
	return await axios.get('http://localhost:4000/inventario/desktop');
};
export const getItemsOtros = async () => {
	return await axios.get('http://localhost:4000/inventario/otros');
};
