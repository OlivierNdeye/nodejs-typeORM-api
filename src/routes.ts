import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (req: Request, res: Response) =>{
  return res.json({mensagem: 'bem-vindo à DIO API'})
});

router.post('/usuarios', createUserController.handle)

export { router }