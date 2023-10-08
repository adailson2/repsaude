// routes/users.ts
import express, { Request, Response } from 'express';
import User, { IUser } from '../models/user';

const router = express.Router();

// Rota para criar um usuário
router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('req =>', req.body);

    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    // console.log('error =>', error);
    return res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
});

// Rota para listar todos os usuários
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar os usuários' });
  }
});

// Rota para buscar um usuário pelo ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar o usuário' });
  }
});

// Rota para atualizar um usuário pelo ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
});

// Rota para excluir um usuário pelo ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
});

export default router;
