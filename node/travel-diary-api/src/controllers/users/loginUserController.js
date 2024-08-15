import generateErrorsUtils from "../../utils/generateErrorsUtils.js";
import selectUserByEmailService from "../../services/users/selectUserByEmailService.js";
import bcrypt from "bcrypt";

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw generateErrorsUtils("se esperaba email o contraseña", 400);

    const user = await selectUserByEmailService(email);

    let validPassword;

    if (user) {
      validPassword = await bcrypt.compare(password, user.password);
    }

    if (!user || !validPassword) {
      throw generateErrorsUtils("Usuario o contraseña incorrecta", 401);
    }

    /**
     * comprobar que el active este en 1
     */

    /**
     * generar el token
     */

    res.send({
      status: "ok",
      message: "Usuario logeado correctamente",
    });
  } catch (error) {
    next(error);
  }
};

export default loginUserController;
