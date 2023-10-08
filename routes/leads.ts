// routes/leads.ts
import express, { Request, Response } from 'express';
import Lead, { ILead } from '../models/lead'; // Certifique-se de importar o modelo de Lead adequado

const router = express.Router();

// Rota para criar um lead
router.post('/', async (req: Request, res: Response) => {
  try {
    const lead = await Lead.create(req.body);
    return res.status(201).json(lead);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o lead' });
  }
});

// Rota para listar todos os leads
router.get('/', async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find();
    return res.status(200).json(leads);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar os leads' });
  }
});

// Rota para buscar um lead pelo ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findById(id);
    if (!lead) {
      return res.status(404).json({ error: 'Lead não encontrado' });
    }
    return res.status(200).json(lead);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar o lead' });
  }
});

// Rota para atualizar um lead pelo ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findByIdAndUpdate(id, req.body, { new: true });
    if (!lead) {
      return res.status(404).json({ error: 'Lead não encontrado' });
    }
    return res.status(200).json(lead);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o lead' });
  }
});

// Rota para excluir um lead pelo ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const lead = await Lead.findByIdAndDelete(id);
    if (!lead) {
      return res.status(404).json({ error: 'Lead não encontrado' });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir o lead' });
  }
});

export default router;
