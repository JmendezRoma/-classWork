//siempre es lo mismo importo hago la implementacion y exporto de primeras
import express from 'express';
import registerUserController from '../controllers/users/registerUserController.js';
import loginUserController from '../controllers/users/loginUserController.js';


const userRouter = express.Router();


//rutas de usuario

userRouter.post('/users/register', registerUserController);
userRouter.post('/users/login', loginUserController)


// userRouter.get('/users', (req,res) => {
//     res.send('soy ruta de usuarios');
// })



export default userRouter;