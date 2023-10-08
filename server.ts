import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Configurar o body-parser para analisar solicitações JSON
app.use(bodyParser.json());

export default app;
