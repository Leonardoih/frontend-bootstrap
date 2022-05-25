//import { ListLaptop } from "./Interface";
import axios from 'axios'


export const getItems = async () => {
   return await axios.get("http://localhost:4000/inventario")  
   
   
}

