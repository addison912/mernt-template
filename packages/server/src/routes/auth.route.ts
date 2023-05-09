import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { LoginUserDto } from '@dtos/auth.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import fieldValidationMiddleware from '@middlewares/login.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}register`, validationMiddleware(CreateUserDto, 'body'), this.authController.register);
    this.router.post(`${this.path}login`, fieldValidationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
