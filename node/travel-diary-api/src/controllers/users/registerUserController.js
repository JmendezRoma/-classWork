import generateErrorsUtils from "../../utils/generateErrorsUtils.js";
import insertUserServices from "../../services/users/insertUserServices.js";
import randomString from 'randomstring';
//todo lo que viene desde el front viene por la request (req)
//body: viene desde un formulario
//params: cuando viene por la query string /user/1
//query: cuando vienen paramatros (o mas de uno)
///users?nombre=juan&&apellido=fernandez
//ejemplo: nombre, edad
//api resfull permite todos los verbos
//npm run dev

//tomo lo que me envian y respondo lo que me envian



const registerUserController = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password)
      throw generateErrorsUtils("se esperaba email o contraseña", 400);

    const registrationCode = randomString.generate(15);

    await insertUserServices(email, password, registrationCode);

    res.send({
      status: "OK",
      message: "usuario registrado correctamente"
    });
  } catch (error) {
    next(error);
  }
};

export default registerUserController;
