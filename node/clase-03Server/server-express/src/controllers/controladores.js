import { user } from "../database/users.js";
import { products } from "../database/products.js";

export const homeController = (req,res) => {
    res.send('Soy server');
}

export const usersController =  (req, res) => {
    
    res.send(user);
}

export const productsCotroller =  (req,res) => {
    

    res.send(products)
}

