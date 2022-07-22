import { Request, Response} from 'express';

class CreateUserController {
  handle(req: Request, res: Response) {

    const nome = req.body.nome;

    if(nome.length === 0){
      res.status(400).json({mensagem: 'Informe um nome de Usuário valido'});
    }

    return res.status(201).json({ mensagem: `Usuaro ${nome} criado`})
  }
}

export { CreateUserController }